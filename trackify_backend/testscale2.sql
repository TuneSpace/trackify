CREATE VIEW rand_helper
AS
    SELECT rnd=RAND();
GO

CREATE FUNCTION [dbo].test_scalability (@n int)
   RETURNS @table TABLE
(
    section NUMERIC NOT NULL PRIMARY KEY,
    duration NUMERIC NOT NULL,
    rows NUMERIC NOT NULL)
AS BEGIN
    DECLARE @strt DATETIME2
    DECLARE @iter INT
    DECLARE @xsec INT
    DECLARE @xcnt INT
    DECLARE @xrnd INT

    SET @iter = 0
    WHILE (@iter < @n) BEGIN
        SET @xsec = 0
        WHILE (@xsec < 10) BEGIN
            SELECT @xrnd=CEILING(rnd * 100)
            FROM rand_helper;
            SET @strt = SYSDATETIME()

            SELECT @xcnt = COUNT(*)
            FROM (SELECT *
                FROM scale_data
                WHERE section=@xsec
                    AND id2=@xrnd) tlb;

            IF @iter = 0 BEGIN
                INSERT INTO @table
                VALUES
                    ( @xsec
                  , datediff(microsecond, @strt, SYSDATETIME())
                  , @xcnt);
            END; ELSE BEGIN
                UPDATE @table
              SET duration = duration 
                  + datediff(microsecond, @strt, SYSDATETIME())
                , rows = rows + @xcnt
            WHERE section = @xsec
            END;
            SET @xsec = @xsec + 1
        END;
        SET @iter = @iter + 1
    END;

    RETURN;
END;

GO