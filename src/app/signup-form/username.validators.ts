import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control:AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ')>0)
        {
            return { cannotContainSpace:true };
        }
        return null;
    }

    //Asynchronous Operations
    static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                if(control.value === "vamsi")
                    resolve({ shouldBeUnique : true });
                else
                    resolve(null);
            }, 2000);
        });
    }

    static required(control:AbstractControl):ValidationErrors | null {
        if((control.touched && control.value as string).length==0)
        {
            return { required:true};
        }
        return null;
    }

    static minlength(control:AbstractControl): ValidationErrors | null {
        if(control.touched && (control.value as string).length <3)
        {
            return { minlength : { 
                requiredLength:3,
                actualLength:(control.value as string).length
            }};            
        }
        return null;
    }

}