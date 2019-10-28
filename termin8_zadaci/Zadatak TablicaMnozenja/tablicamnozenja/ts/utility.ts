class Utility {

    static getInputValue(elementID: string): string {
        
        let inputElement: HTMLInputElement = document.getElementById(elementID)as HTMLInputElement;
        return inputElement.value;
    }
    
}