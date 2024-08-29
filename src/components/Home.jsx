const Home = () =>{
    return(
        <div className="main-content mobile" style={{marginTop:"0px"}}>
        <h1 className="text-1">Hello, my name is</h1>
        <h1 className="text-2">Md Yusuf</h1>
        <h1 className="text-3">And I'm a<span className="gray"> Software Developer</span></h1><br/>
        <a href="https://dev.to/imyusufakhtar" className="btn btn-primary customBut" target="blank">Blogs</a>
        <a href="https://github.com/imyusufakhtar" className="btn btn-primary customBut" target="blank">Github</a>
        <a href="https://leetcode.com/u/imyusufakhtar/" className="btn btn-primary customBut" target="blank">Leetcode</a>
        </div>
    );
}

export default Home;