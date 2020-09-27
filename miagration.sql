create database colleges

use colleges;
create table collegedata (
	ID int,
    name VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip char(5),
    size int,
    school_url VARCHAR(255),
    price_calculator_url VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(ID)
);

select * from collegedata

ALTER TABLE collegedata MODIFY zip VARCHAR(10)

create user 'collegeAdmin'@'localhost' identified with mysql_native_password by '$c0ll3g3$';
GRANT ALL on colleges.* to 'collegeAdmin'@'localhost';

INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (166674, 'Massachusetts College of Art and Design', 'Boston', 'MA', '02115-5882', 1828, 'www.massart.edu', 'massart.edu/net-price-calculator')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (164924, 'Boston College', 'Chestnut Hill', 'MA', '02467', 9639, 'www.bc.edu', 'https://npc.collegeboard.org/student/app/bc')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165024, 'Bridgewater State University', 'Bridgewater','MA', '02325', 9312, 'www.bridgew.edu', 'microsites.bridgew.edu/financialaid/net-price-calculator')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165264, 'Laboure College', 'Milton', 'MA', '02186', 845, 'www.laboure.edu/about-labour-', 'www.laboure.edu/tuition-financial-aid/net-price-calculator')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (166054, 'Hellenic College-Holy Cross Greek Orthodox School of Theology', 'Brookline', 'MA', '02445-7415', 65, 'www.hchc.edu', 'www.hchc.edu/assets/files/FinancialAid/npcalc.htm')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (167394, 'College of Our Lady of the Elms', 'Chicopee','MA', '01013', 1127, 'https://www.elms.edu', 'https://tcc.noellevitz.com/(S(fwtmfnosjzw40vqinl1pafji))/Elms%20College/Freshman-Students')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (167677, 'Saint John''s Seminary', 'Brighton', 'MA', '02135-3846', 24, 'www.sjs.edu', 'www.sjs.edu')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (167251, 'Newbury College', 'Brookline', 'MA', '02445', '635', 'www.newbury.edu', 'www.newbury.edu/admissions-and-aid/financial-aid-and-billing/financial-aid/net-price-calculator')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (164447, 'American International College', 'Springfield', 'MA', '01109', 1307, 'www.aic.edu', 'https://www.aic.edu/admissions/tuition-and-financial-aid/net-price-calculator/')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (166391, 'Lasell University', 'Newton', 'MA', '02466', '1650', 'www.lasell.edu/', 'www.lasell.edu/tuition-and-aid/net-price-calculator.html')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (166407, 'Lawrence Memorial Hospital School of Nursing', 'Medford', 'MA', '02155', 281, 'www.lmregis.org', 'lmregis.org/wp-content/uploads/2019/11/Net-Price-Calculator.html')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165167, 'Cambridge College', 'Boston', 'MA', '02129', 690, 'www.cambridgecollege.edu', 'cambridgecollege.edu/net-price-calculator/')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (164614, 'Boston Baptist College', 'Boston', 'MA', '02136-4030', 56, 'Boston.edu', 'www.boston.edu/npc')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165194, 'Cape Cod Community College', 'West Barnstable', 'MA', '02668-1599', 2544, 'www.capecod.edu', 'www.capecod.edu/files/netprice/index.html')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (164641, 'Bay State College', 'Boston', 'MA', '02116', 684, 'www.baystate.edu', 'www.baystate.edu/financial-aid/tuition-fees/net-price-calculator/')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165981, 'Greenfield Community College', 'Greenfield', 'MA', '01301-9739', 1528, 'www.gcc.mass.edu', 'web.gcc.mass.edu/financial-aid/net-price-calculator/')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165884, 'Benjamin Franklin Institute of Technology', 'Boston', 'MA', '02116', 550, 'www.bfit.edu/', 'www.bfit.edu/_forms/npcalc.htm')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (166887, 'Middlesex Community College', 'Bedford', 'MA', '01730-9124', 6620, 'https://www.middlesex.mass.edu', 'https://www.middlesex.mass.edu/netpricecalc/')
  INSERT INTO collegedata (ID,name,city,state,zip,size,school_url,price_calculator_url) VALUES (165334, 'Clark University', 'Worcester', 'MA', '01610-1477', 2252, 'www.clarku.edu', 'www.clarku.edu/resources')