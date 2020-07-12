export interface ClienteDTO {
    id: string;
    nome:string;
    email:string;

    //Quando possui a interrogação significa que é opcional
    imageUrl?:string;
}