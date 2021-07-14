export class loginDTO {
    userName: number;
    password:string;
}


export class RegisterDTO {
    userName : string;
    fullName : string;
    phoneNumber : string;
    email: string
    password : string
}


export class Complaint {
    id:number;
    complaintDate: Date;
    complainerName : string;
    complainerEmail : string;
    complaintLocation : string;
    complaintDetails:string 
    desiredOutcome :string
    status :number
    noPromotion?: boolean
    complaintNatures: ComplaintNature[] 
    canEdit? : boolean
}

export class ComplaintNature {
    complaintId:number;
    complaintNatueId:number
    constructor(complaintId,complaintNatueId){
        this.complaintId = complaintId;
        this.complaintNatueId = complaintNatueId
    }
}