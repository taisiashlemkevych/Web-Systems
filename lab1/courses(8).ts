interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(
            (course: Course) => course.name !== courseName
        );
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(
            (course: Course) => course.name === courseName
        );
    }

    showCourses(): void {
        for (const course of this.courses) {
            console.log(
                `${course.name} (${course.duration} hours): ${course.students.join(", ")}`
            );
        }
    }
}

const frontendCourse = new OnlineCourse("Frontend Development", 40);
const backendCourse = new OnlineCourse("Backend Development", 50);
const testingCourse = new OnlineCourse("Software Testing", 30);

const courseManager = new CourseManager();

courseManager.addCourse(frontendCourse);
courseManager.addCourse(backendCourse);
courseManager.addCourse(testingCourse);

frontendCourse.registerStudent("Jungkook");
frontendCourse.registerStudent("Teahyung");

backendCourse.registerStudent("John");
backendCourse.registerStudent("Kate");

testingCourse.registerStudent("Jungkook");

console.log("Courses:");
courseManager.showCourses();

console.log(
    `Is Jungkook registered for Frontend Development? ${frontendCourse.isStudentRegistered("Jungkook")}`
);

console.log(
    `Is Teahyung registered for Backend Development? ${backendCourse.isStudentRegistered("Teahyung")}`
);