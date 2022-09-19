function Home(){
    return (
       <Card
       bgcolor="warning"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text="Let's Get Started!"
            body={(<img src="bank.png" className="img-fluid" 
            alt="Responsive image"/>)}
       />
    );
}