import React from 'react'

const Iframe = () => {
    return (
        <section className='fixed'>
            <iframe                
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnatgeo&tabs=timeline&width=546&height=768&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="456" height="768" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </section>
    )
    // to get embeded link for facebook iframe 
    // visit https://developers.facebook.com/docs/plugins/page-plugin 
}


export default Iframe