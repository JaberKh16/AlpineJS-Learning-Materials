document.addEventListener('alpine:init', () => {
    // setup the state variables
    // Alpine.data() is used to create a new component with the name 'stateVariables'
    Alpine.data('stateVariables', () => ({
        name: 'alpinejs',
        count: 0,

        logData(){
            console.log(this.name, this.count);
        }
    }))
});