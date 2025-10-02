import './acsess.css'

function Acsess() {
  return (
    <div className="acsess">
      <h2>アクセス</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12885.366709010388!2d139.47024436132358!3d36.15823932698702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f2e9b56646919%3A0xc18a85699b4a5605!2z5oWI6Zuy5bGxIOecn-ims-Wvug!5e0!3m2!1sja!2sjp!4v1759400156807!5m2!1sja!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Acsess
