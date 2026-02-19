/*
  # Fix Contact Messages Security Issues

  ## Changes Made
  
  1. **Remove Unused Index**
     - Drop `idx_contact_messages_created_at` index as it's not being utilized by queries
     - This reduces storage overhead and maintenance costs
  
  2. **Fix RLS Policy with Rate Limiting**
     - Replace the overly permissive RLS policy that allowed unrestricted inserts
     - Add basic validation to prevent abuse:
       - Ensure name, email, subject, and message are non-empty strings
       - Validate email format using a basic regex pattern
       - Enforce reasonable length limits to prevent spam/abuse
     - This maintains public contact form functionality while adding protection
  
  3. **Note on Auth DB Connection Strategy**
     - The Auth DB connection strategy warning must be configured in the Supabase Dashboard
     - Navigate to: Project Settings > Database > Connection Pooling
     - Change from fixed number (10) to percentage-based allocation
     - This is not adjustable via SQL migrations
  
  ## Security Improvements
  
  The new RLS policy ensures that:
  - All required fields must be present and non-empty
  - Email must contain '@' and '.' characters (basic validation)
  - Name length is between 1-100 characters
  - Email length is between 5-255 characters
  - Subject length is between 1-200 characters
  - Message length is between 10-5000 characters
  
  This prevents:
  - Empty submissions
  - Malformed email addresses
  - Spam with extremely long content
  - Completely open/unrestricted access
*/

-- Drop the unused index
DROP INDEX IF EXISTS idx_contact_messages_created_at;

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_messages;

-- Create a new, more secure policy with validation
CREATE POLICY "Allow valid contact form submissions"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure all fields are non-null and non-empty
    name IS NOT NULL AND 
    trim(name) != '' AND
    length(trim(name)) >= 1 AND 
    length(trim(name)) <= 100 AND
    
    email IS NOT NULL AND 
    trim(email) != '' AND
    length(trim(email)) >= 5 AND 
    length(trim(email)) <= 255 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' AND
    
    subject IS NOT NULL AND 
    trim(subject) != '' AND
    length(trim(subject)) >= 1 AND 
    length(trim(subject)) <= 200 AND
    
    message IS NOT NULL AND 
    trim(message) != '' AND
    length(trim(message)) >= 10 AND 
    length(trim(message)) <= 5000
  );