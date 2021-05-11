import { tema } from "./tema"
import { User } from "./User"

export class postagem{

    public id: number
    public titulo: string
    public texto: string
    public Data: Date
    public usuario: User
    public tema: tema
}