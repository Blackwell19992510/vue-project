-- Get students doing a course
SELECT FirstName,
    LastName,
    EmailAddress
FROM `Students`
WHERE CourseID = 1
select *
from Lecturers
where DepartmentID = 1
select FirstName,
    LastName,
    EmailAddress
from Students
where HostelID = 2
SELECT HeadOfDepartment,
    DepartmentPhoneNumber
from Department
UPDATE Courses
SET ClassroomID = 1
WHERE CourseID = 3
SELECT CourseName,
    ClassName,
    Building
FROM Courses,
    Classroom
WHERE Courses.ClassroomID = 1