export interface PersonaDTO{
    id: Number,
    nombre: String,
    apellido: String,
    edad: Number,
    bio: String,
    usuario:Number,
    imagenBg: string | null | ArrayBuffer,
    imagenPerfil: string | null | ArrayBuffer
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