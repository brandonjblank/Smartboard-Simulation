use 3916_project;

drop table if exists ProjectSlide;
drop table if exists ProjectUser;
drop table if exists UserInfo;
drop table if exists Slide;
drop table if exists Project;


CREATE TABLE ProjectSlide (
    ProjectID INT NOT NULL,
    SlideID INT NOT NULL,
    PRIMARY KEY (ProjectID, SlideID)
);

CREATE TABLE Slide (
    SlideID INT AUTO_INCREMENT NOT NULL,
    pID INT,
    content MEDIUMTEXT,
    PRIMARY KEY (SlideID)
);

CREATE TABLE Project (
    ProjectID INT AUTO_INCREMENT NOT NULL,
    projectName varchar(25),
    PRIMARY KEY (ProjectID)
);


alter table 3916_project.ProjectSlide
add constraint fk_Slide FOREIGN KEY (SlideID)
REFERENCES Slide (SlideID);

alter table 3916_project.ProjectSlide
add constraint fk_Project FOREIGN KEY (ProjectID)
REFERENCES Project (ProjectID);



