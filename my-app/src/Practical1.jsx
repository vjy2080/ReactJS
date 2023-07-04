import React from "react";

const SecondIntro = () => {
    return (<>
<hr/>
<h1>Practical 1</h1>

     <table border="1"  cellpadding="5px">
        <thead>
            <tr>
                 <th rowspan="3">Day</th> 
                 <th colspan="3">Seminar</th> 
            </tr> 
             <tr>
                 <th colspan="2">Schedule</th> 
                 <th rowspan="2">Topic</th> 
            </tr> 
             <tr>
                 <th>Begin</th> 
                 <th>End</th> 
            </tr>
             
        </thead>

        <tbody>
             
            <tr>
                 <td rowspan="2">Monday</td> 
                 <td rowspan="2" bgcolor="yellow" >8:00 a.m</td> 
                 <td rowspan="2" bgcolor="pink" >5:00 p.m</td> 
                 <td align="center" >Introduction to XML</td> 
            </tr> 
             <tr>
                 <td align="center" >Validity: DTD and Relax NG</td> 
            </tr> 
             <tr>
                 <td rowspan="21">Tuesday</td> 
                 <td rowspan="8" bgcolor="yellow" >8:00 a.m</td> 
                 <td rowspan="8" bgcolor="yellow" >11:00 a.m</td> 
                 <td rowspan="14" align="center" >XPath </td> 
            </tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr>
                 <td rowspan="10" bgcolor="yellow" >11:00 a.m</td> 
                 <td rowspan="10" bgcolor="yellowgreen" >2:00 p.m</td> 
            </tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr>

                 <td rowspan="7" align="center" >XSL transformation</td> 
            </tr> 
             <tr></tr> 
             <tr></tr> 
             <tr></tr> 
             <tr>
                 <td rowspan="3"bgcolor="yellowgreen">2:00 p.m</td> 
                 <td rowspan="3"bgcolor="pink">5:00 p.m</td> 
            </tr> 
             <tr></tr> 
             <tr></tr> 
             <tr>
                 <td>Wednesday</td> 
                 <td bgcolor="yellow">8:00 a.m</td> 
                 <td bgcolor="yellowgreen">12:00 p.m</td> 
                 <td align="center" >XLS Formatting Objects</td> 
            </tr>
        </tbody>
    </table>

    <div class="mt-10">
    <img src="https://assets.codepen.io/2332100/large-landscape-2048x1536.jpg" alt="natural1" />
    </div>
    <div class="mt-10">
      <h2>Image with local "src" not link here, need to confirm with Jay Sir.</h2>
    <img src="./natural.jpg" alt="natural2" />
    <img src="natural.jpg" alt="natural3" />
    </div>


            </>);
};

export default SecondIntro;