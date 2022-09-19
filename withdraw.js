function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
  function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="danger"
        header="Withdraw"
        status={status}
        body={show ? (  
                <>
                Withdraw<br/>
                <input type="input" className="form-control" id="amount" placeholder="$_" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                
                <button type="submit" className="btn btn-dark" onClick={handleCreate}>Submit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }
  