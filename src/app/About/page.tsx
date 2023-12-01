import Image from "next/image";
import Navbar from "../(component)/Navbar/Navbar";
const About=()=>{
return(


// <!-- About Us Section Start -->
<>

<Navbar title="About Us"/>

<section className="about-us">
    <div className="row">
        <div className="about-col">
            <h1>We are the world's largest University</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
            <a href="#" className="hero_btn btn">EXPLORE NOW</a>
        </div>
        <div className="about-col">
            <Image src="/img/about.png" alt="about team pic " width={300} height={500}/>

            {/* <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /> */}
        </div>
    </div>
</section>
</>



)
}
export default About;
