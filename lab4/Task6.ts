interface UserTask6{
    name: string,
    age: number
}
let arrUsers: User[] = [];
arrUsers.push({name: 'john', age: 30});
arrUsers.push({name: 'jane', age: 25});
let arrDates: Date[] = [];
arrDates.push(new Date('2025-11-01'));
arrDates.push(new Date('2025-12-31'));
let arrHtmlElements: HTMLElement[] = [];
arrHtmlElements.push(document.createElement('div'));
arrHtmlElements.push(document.createElement('span'));
let regexArray: RegExp[] = [
    /[a-z]+/,
    /\d+/g,
    new RegExp('^[A-Z]'),
    /[aeiou]/i,
    /\s+/
];
interface EmployeeTask6 {
    id: number;
    name: string;
    position: string;
    department: string;
    salary: number;
    isActive: boolean;
    hireDate: Date;
    skills?: string[]; 
}

let employees: EmployeeTask6[] = [
    {
        id: 1,
        name: 'Иван Петров',
        position: 'Разработчик',
        department: 'IT',
        salary: 150000,
        isActive: true,
        hireDate: new Date('2023-01-15'),
        skills: ['TypeScript', 'React', 'Node.js']
    },
    {
        id: 2,
        name: 'Мария Иванова',
        position: 'Менеджер проектов',
        department: 'Управление',
        salary: 180000,
        isActive: true,
        hireDate: new Date('2022-03-10')
    },
    {
        id: 3,
        name: 'Алексей Сидоров',
        position: 'Дизайнер',
        department: 'Дизайн',
        salary: 120000,
        isActive: false,
        hireDate: new Date('2023-06-20'),
        skills: ['Figma', 'Photoshop', 'UI/UX']
    }
];