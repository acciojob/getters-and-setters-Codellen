//complete this code
class Person {
	constructor(name,age)
	{
		this.Age = age
		this.Name = getName;
	}
	get getName()
	{
		this.Name = name;
	}
	set setterAge(age)
	{
		this.Age = "25";
	}
}

class Student extends Person {
	super(name)
	study(){
		
		console.log(`${Student.name} is studying`)
	}
}

class Teacher extends Person {
	super(name)
	teach(){
		
		console.log(`${Teacher.name} is studying`)
	}
}
var user = new Person("John","25")

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
