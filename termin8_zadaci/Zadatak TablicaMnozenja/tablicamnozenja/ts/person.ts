class Person{
    protected name: string;

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
    }
    
    public formatName(): string{
        return this.name[0].toUpperCase() + this.name.substr(1).toLowerCase();
    }
    
}