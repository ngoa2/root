import React from 'react';
import BrandRequestForm from './BrandRequestForm';


class RatePage extends React.Component {

    render () {
      return (
        <div>
            <div style = {{display:"flex", flexDirection:"column", flex:1, justifyItems:"center", width:"70%", justifySelf:"center", margin:"0 auto"}}>
                <h1>How We Rate</h1>
                <div style={{marginLeft:40, fontSize:20}}>
                    <p>In order to gather the information necessary to rate a brand, we searched through official company reports and various brand certifications. We focused our attention in finding information relevant towards three main categories: sustainable materials, ethical practices, and supply chain transparency. We used this data to rate each category on a scale of 1 to 3, depending on a variety of factors, including things such as the ease of access to data related to their practices and a visible effort to improve their current practices. We then averaged the three categories’ ratings to calculate the main rating that can be seen on our Google extension popup. </p>
                </div>
                <h1>Category Ratings</h1>
                <div style={{marginLeft:40, fontSize:20, marginBottom:90}}>
                    <h3>Sustainable Materials</h3>
                    <p>This category focuses on information describing the materials that are being used when making the clothing. We consider the use of animal products and the company’s animal welfare policies as well as their usage and disposal of water, chemicals, and textiles.</p>
                    <h3>Ethical Practices</h3>
                    <p>This category focuses on information describing how the company treats their workers. This includes policies on payment of a living wage, practices on child labor, non-discriminatory policies in place, as well as worker protection from the impacts of COVID-19.</p>
                    <h3>Supply Chain Transparency</h3>
                    <p>This category focuses on transparency in regards to policies and having certifications or other forms of assurance to address impacts to the environment as well as workers across the supply chain. </p>
                </div>
                <BrandRequestForm></BrandRequestForm>
            </div>
        </div>
    );
  }
  }
  
  export default RatePage;