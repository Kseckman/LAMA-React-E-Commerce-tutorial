import styled from "styled-components"

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

    display:flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper =  styled.div `
    width:  40%;
    padding: 20px;
    background-color: white;

`;

const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form `
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Button = styled.button `
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a `

`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placehoulder='username' />
                <Input placehoulder='password' />
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER YOUR PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login