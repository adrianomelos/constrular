export interface PoliticaDePrivacidade{
    id?: number //o ? é um atributo opcional
    description: string
}

export interface TermosDeUso{
    id?: number //o ? é um atributo opcional
    description: string
}

export interface FaleConosco{
    id?: number //o ? é um atributo opcional
    nome: string
    mensagem: string
    email: string
}

export interface Cliente{
    id?: number //o ? é um atributo opcional
    nome: string
    telefone: string
    email: string
}