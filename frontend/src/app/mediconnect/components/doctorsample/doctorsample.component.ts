import { Doctor } from "../../models/Doctor";
export class DoctorSampleComponent  {
    doctor: Doctor;

    logDoctorAttributes(){
        console.log('doctorId:', this.doctor.doctorId);
        console.log('fullName:', this.doctor.fullName);
        console.log('contactNumber:', this.doctor.contactNumber);
        console.log('email:', this.doctor.email);
        console.log('specialty:', this.doctor.specialty);
        console.log('yearsOfExperience:', this.doctor.yearsOfExperience);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 118ccd8d52eea741e0a6783b2a5e48572b06fae1
