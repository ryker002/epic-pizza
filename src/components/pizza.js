import React from "react"

const Pizza = () => {
  return (
    <section id="pizza" className="bricks">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.6712211768327!2d-90.20526948465807!3d38.61043697961603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b3a084417bf7%3A0x9212bd7bfdee7ea9!2sEpic%20Pizza%20%26%20Subs!5e0!3m2!1sen!2sus!4v1579893014177!5m2!1sen!2sus"
        width="100%"
        height="100%"
        frameborder="0"
        style={{ border: 0, position: "absolute", top: 0, left: 0 }}
        allowfullscreen=""
        title="Google Maps"
      ></iframe>
    </section>
  )
}

export default Pizza
