
/*
Scripts para crear tablas e insertar registros para realizar prueba.
*/

create table Departamentos (
id int primary key,
Nombre varchar(100) not null
)


create table Empleados (
Id int primary key,
Nombre varchar(100) not null,
DepartamentoId int foreign key references Departamentos(Id),
Salario decimal(10,2),
FechaIngreso date)


insert into Departamentos (id, nombre)
values
(1,'IT'),
(2,'Contabilidad'),
(3,'RRHH'),
(4,'Mercadeo'),
(5,'Ventas')


Insert into Empleados (Id, Nombre, DepartamentoId, Salario, FechaIngreso)
values
(1, 'Mario Castro', 1, 25000, getdate()-730),
(2, 'Luisa Cerrato', 1, 15000, getdate()-120),
(3, 'Rodolfo Villas', 1, 30000, getdate()-180),
(4, 'Julian Rodas', 1, 12000, getdate()-1000),

(5, 'Ana Leiva', 2, 18000, getdate()-400),
(6, 'Julian Rodas', 2, 30000, getdate()-180),

(7, 'Marta Elvir', 3, 15000, getdate()-180),
(8, 'Carlos Rivas', 3, 18000, getdate()-180),
(9, 'Dina Clark', 3, 20000, getdate()-180),

(10, 'Antonio Garcia', 4, 25000, getdate()-900),
(11, 'Luisa Cerrato', 4, 25000, getdate()-120),
(12, 'Rodolfo Villas', 4, 32000, getdate()-730),
(13, 'Julian Rodas', 4, 12000, getdate()-180),

(14, 'Pedro Franco', 5, 20000, getdate()-200),
(15, 'Daniela Romero', 5, 22000, getdate()-180)

SELECT * from Departamentos;
SELECT * from Empleados;

SELECT e.DepartamentoId, AVG(e.Salario) as Promedio, MIN(e.Salario) as Minimo, MAX(e.Salario) as Maximo
from Departamentos d
inner join Empleados e
on d.id = e.DepartamentoId
group by e.DepartamentoId
order by e.DepartamentoId;

SELECT d.nombre, count(e.id) as EmpleadosTotales
from Departamentos d
inner join Empleados e
on d.id = e.DepartamentoId
group by d.Nombre 
having count(e.DepartamentoId) >= 3
order by d.nombre;

SELECT * from Empleados where FechaIngreso<'5/8/2022';

SELECT e.Nombre, d.Nombre
from Departamentos d
inner join Empleados e
on d.id = e.DepartamentoId
where d.Nombre = 'Mercadeo'
order by d.Nombre

SELECT e.Nombre as Colaborador, MAX(e.Salario) as Salario , d.Nombre as Departamento
from Departamentos d 
inner join Empleados e
on d.id = e.DepartamentoId
group by e.Nombre, d.Nombre
order by d.Nombre

SELECT COUNT(e.Nombre) as Numero, e.Nombre as Colaborador , d.Nombre as Departamento
from Departamentos d 
inner join Empleados e
on d.id = e.DepartamentoId
group by e.Nombre, d.Nombre
order by d.Nombre
