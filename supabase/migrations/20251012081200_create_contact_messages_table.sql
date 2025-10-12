/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Name of the person contacting
      - `email` (text, not null) - Email address of the person
      - `subject` (text, not null) - Subject of the message
      - `message` (text, not null) - The actual message content
      - `created_at` (timestamptz) - Timestamp when the message was created
      - `read` (boolean, default false) - Whether the message has been read

  2. Security
    - Enable RLS on `contact_messages` table
    - Allow anyone to insert messages (public contact form)
    - No public read access (only you can view messages in the database dashboard)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form (insert only)
CREATE POLICY "Anyone can submit contact form"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);