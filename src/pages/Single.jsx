import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_960_720.jpg' alt='foto1'/>
        <div className='user'>
          <img src='https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_960_720.jpg' alt='foto2'/>
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="foto3" />
            </Link>
            <img src={Delete} alt="foto4" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas nec felis efficitur eleifend. Integer at risus metus. Ut condimentum a ex at lacinia. Suspendisse non leo elit. Fusce imperdiet fermentum erat, at fermentum ante luctus bibendum. Etiam bibendum arcu lectus, sodales porta arcu laoreet non. Cras dictum lobortis mi nec faucibus.
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas nec felis efficitur eleifend. Integer at risus metus. Ut condimentum a ex at lacinia. Suspendisse non leo elit. Fusce imperdiet fermentum erat, at fermentum ante luctus bibendum. Etiam bibendum arcu lectus, sodales porta arcu laoreet non. Cras dictum lobortis mi nec faucibus.
          Nulla quis varius metus. Donec lobortis magna finibus blandit accumsan. Morbi mollis nibh a maximus fermentum. Curabitur nec dapibus felis, ac dapibus ligula. Donec semper ligula quis enim faucibus lobortis. Praesent euismod, odio et gravida vulputate, sapien mi sollicitudin ex, non gravida sem odio sed augue. In ut molestie nibh. Vestibulum pretium finibus ligula nec imperdiet. Etiam elementum suscipit leo in dapibus. Suspendisse ac convallis nulla, at venenatis mi. Nam eu ligula quis orci pellentesque lobortis. Nulla quis quam sed velit sollicitudin aliquet. Pellentesque condimentum turpis leo, sit amet facilisis tortor semper sed.
          Quisque suscipit consequat commodo. Pellentesque molestie, odio eu tincidunt auctor, dui libero venenatis purus, eu pulvinar risus odio sed purus. Nulla auctor dui quis consectetur blandit. Aenean justo nunc, convallis sed tristique ut, luctus ac orci. Phasellus eget iaculis nisl. Duis quis suscipit ex. Vestibulum tempus dolor euismod auctor venenatis. Proin ultricies augue diam, at accumsan ligula ullamcorper vel. Aenean egestas tellus quis lectus molestie fermentum. Vestibulum congue auctor est, eget egestas magna mollis at. Proin metus elit, gravida eu est id, iaculis aliquet ipsum. Cras tempor, neque at rutrum consequat, urna orci dictum d olor, et luctus nisi arcu id est. Aenean aliquam tempor neque quis ultricies.
          Nunc eleifend cursus risus sit amet pellentesque. Maecenas vel lacus semper, iaculis neque eu, convallis elit. Integer et nisi in tortor egestas ullamcorper. Sed quis leo non turpis tincidunt tempus eget a tellus. Vivamus sit amet justo nisl. Quisque ullamcorper congue mattis. Integer fringilla enim vitae dolor tempor, nec mollis diam varius. Integer vitae ligula id metus lobortis tristique. Aliquam erat volutpat. Vestibulum ac neque eleifend, ultrices dolor efficitur, imperdiet nisi. Donec tincidunt tellus nec arcu dictum lobortis. In auctor ex sit amet nisi placerat ullamcorper. Nunc vel ante massa.
          Phasellus iaculis finibus nisl sed interdum. Mauris eu sem sit amet nisl consequat convallis. Aenean imperdiet volutpat lacus sagittis iaculis. Vestibulum vitae mollis eros, non dictum erat. Sed rutrum consectetur ullamcorper. Integer a tristique purus. In fringilla leo non erat dapibus, in ornare nisl finibus. Sed sit amet suscipit magna. Nunc vitae molestie libero, et tempor dui. Sed in mollis mi, varius sollicitudin justo.
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
