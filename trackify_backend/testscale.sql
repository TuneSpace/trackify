-- Database: trackify

CREATE OR REPLACE PROCEDURE scaletest
(INOUT counter int)
LANGUAGE plpgsql
AS $$
BEGIN
    WHILE counter < 1000000 LOOP
    INSERT INTO usertable
        (username, passcode, email, avatar)
    VALUES
        ('ShellyB', 'shelly123', 'shelly@gmail.com', 'this is my link');
    counter := counter + 1;
END LOOP;

END;
$$;

DO $$
DECLARE counter int := 0;
BEGIN
  CALL scaletest
(counter);
  RAISE NOTICE 'counter = %', counter;
-- prints 15
END;
$$;


-- SELECT * FROM public.usertable
-- ORDER BY id ASC 