//Navigate to http://localhost:3000/netlify


export default function NetlifyCMS() {

  let {counselorFirstName, counselorLastName, counselorEmailAddress, counselorTextNumber, counselorPhoneNumber} = "";
  const data = require('./CounselorData.json');
  const counselorData = JSON.parse(JSON.stringify(data));

  counselorFirstName = counselorData.counselorFirstName;
  counselorLastName = counselorData.counselorLastName;
  counselorPhoneNumber = counselorData.counselorPhoneNumber;
  counselorTextNumber = counselorData.counselorTextNumber;
  counselorEmailAddress = counselorData.counselorEmailAddress;

    return (      
      <div className="container">
        <main> 
          <div className="back-button">
            <div className="back-button-inner">
              <img src="/icons/back-arrow.svg" className="back-arrow" />
              <span>Back to home</span>
            </div>
          </div>
          <div className="contact-container">
            <h1 className="title">University Contacts</h1>
            <div className="card">
              <h2 className="card-title">Academic Counselor</h2>
              <div className="counselor">
                <div className="name"> 
                  <h3>{counselorFirstName} {counselorLastName}</h3>
                </div>
                <div className="info">
                  <div className="info-line">
                    <img src="/icons/cell-text.svg" className="cell-text" />
                    <div>
                      <span className="contact-link">Text me at {counselorTextNumber}</span>
                    </div>
                  </div>
                  <div className="info-line">
                    <img src="/icons/call.svg" className="call" />
                    <div>
                      <span className="contact-link">{counselorPhoneNumber}</span>
                    </div>
                  </div>
                  <div className="info-line">
                    <img src="/icons/envelope.svg" className="envelope" />
                    <div>
                      <div>
                        <span className="contact-link">{counselorEmailAddress}</span>
                      </div>
                      <div className="email-link">
                        <span>Email</span> <span className="name">{counselorFirstName}</span> <img src="./icons/red-arrow.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-offices-container">
            <div className="service-offices">
              <div className="title">
                <p>Service Offices</p>
              </div>
              <div className="service-menu">
                <div className="tabs">
                  <div className="selected">
                    Academic Services
                  </div>
                  <div>
                    Financial Services
                  </div>
                  <div>
                    Technical Support
                  </div>
                </div>
              </div>
              <div className="service-info">
                <div className="tab">
                  <h2>Academic Services Office</h2>
                  <ul>
                    <li>
                      <img src="/icons/chat.svg" className="chat" />
                      <div>Chat Now</div>
                    </li>
                    <li>
                      <img src="/icons/call.svg" className="call" />
                      <div>800-366-9699</div>
                    </li>
                    <li>
                      <img src="/icons/cell-text.svg" className="cell-text" />
                      <span>Text me at {counselorTextNumber}</span>
                    </li>
                    <li>
                      <img src="/icons/envelope.svg" className="envelope" />
                      <div>student.services@phoenix.edu</div>
                    </li>
                  </ul>
                  <div className="phone-hours">
                    <h3>Phone/Text Hours:</h3>
                    <p>Mon-Fri: 6am - 7pm (AZ time)</p>
                  </div>
                  <div className="closed">
                    <p>Closed on major holidays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}

/*  export async function getStaticProps() {
  const data = await client.query({
    import jsonData from CounselorData,
      query {universityContactsPages {
        myPhoenixContactsSlug
        myPhoenixHeader {
          url
        }
        counselorFirstName
        counselorLastName
        counselorTextNumber
        counselorPhoneNumber
        counselorEmailAddress
        myPhoenixFooter {
          url
        }        
      },
  })
  return {props: {data}} 
} */

/* pulling out header & footer divs
         <div>
            <img src={"https://media.graphassets.com/VO0GhNkuT6esQ4kibrp9"} height="81" width="1855" /> 
          </div>
          
          <div><img src={"https://media.graphassets.com/cCza7uHVTSqFEwOHANMp"} height="600" width="1855"/>
          </div>

*/