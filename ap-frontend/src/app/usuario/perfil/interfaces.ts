export interface PersonaDTO{
    id: Number,
    nombre: string| null,
    apellido: string | null,
    edad: Number | null,
    bio: string | null,
    usuario:Number | null,
    imagenBg: string,
    imagenPerfil: string
};


export interface TrabajoDTO{
    id:Number,
    entidad: String,
    nombre: String,
    inicio: Number,
    fin: Number,
    path: String,
    usuario: Number
};

export interface EstudioDTO{
    id: Number,
    entidad: String,
    nombre: String,
    inicio: Number,
    fin: Number,
    path: String,
    usuario: Number
};

export interface ProyectoDTO{
    id: Number,
    nombre: String,
    repositorio: String,
    rol: String,
    usuario:Number
};

export interface SkillDTO{
    id: Number,
    nombre: String,
    categoria: String,
    nivel: Number,
    usuario:Number
};

export interface UsuarioDTO{
    id: Number,
    nombre: string,
    contra: string
}

export interface PerfilDTO{
    id: Number,
    personal: PersonaDTO[],
    trabajos: TrabajoDTO[],
    estudios: EstudioDTO[],
    proyectos: ProyectoDTO[],
    skills: SkillDTO[]
};

export interface SesionDTO{
    usuario: string,
    clave: string|null
}