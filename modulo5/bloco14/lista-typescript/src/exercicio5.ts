enum Role {
    USER = "user",
    ADMIN = "admin"
}

type Usuario = {
    name: string,
    email: string,
    role: Role
}

const usuarios: Usuario[] =
[
	{name: "Rogério", email: "roger@email.com", role: Role.USER},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
]

const filtraEmailAdmin = (usuarios: Usuario[]): string[] => {
    return usuarios.filter(item => {
        if(item.role === Role.ADMIN){
            return item.email
        }
    }).map(item => {
        return item.email
    })
}

console.log(filtraEmailAdmin(usuarios))