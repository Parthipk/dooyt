export type Module = {
 id:string;
 name:string;
 category:string;
 icon:string;
 description:string;
}


export type Plan = {
 id:string;
 name:string;
 monthlyPrice:number;
 tagline:string;
 features:string[];
}


export type Testimonial = {
 id:string;
 name:string;
 role:string;
 rating:number;
 quote:string;
}