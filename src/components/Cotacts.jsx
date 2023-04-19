import './Contacts.css';

function Contacts(){
    return(
        <div className="backgroundContacts">
            <div className='Contacts'>
                <div className='ContactInfo'>
                    <h3>Tel: +359878176005 or</h3>
                    <h3>+359878176004</h3>
                    <hr/>
                    <h3>Email: vagenservice@abv.bg</h3>
                    <hr/>
                    <h3>Addres: Sofia, Evlia Chelebi 39</h3>
                    <hr/>
                    <h3>Work Schedule:</h3>
                    <h3>Monday-Friday: 09:00-18:30</h3>
                    <h3>Saturday: 09:30-14:00</h3>
                    <h3>Sunday: Closed</h3>
                    <hr/>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.816360605592!2d23.246966402409342!3d42.66516748741791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b51d222e99d%3A0x9199c4768c95cfd5!2z0YPQuy4g4oCe0JXQstC70LjRjyDQp9C10LvQtdCx0LjigJwgMzksIDE2MTkg0JrQvdGP0LbQtdCy0L4sINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1681930656323!5m2!1sbg!2sbg" className='mapdiv'></iframe>
            </div>
        </div>
    );
}

export default Contacts;