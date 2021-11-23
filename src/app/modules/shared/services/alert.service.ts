import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(text: string, tittle?: string) {
    return Swal.fire({
      title: tittle || 'Actualizado',
      text: text,
      icon: 'success'
    })
  }

  info(text: string, tittle?: string) {
    return Swal.fire({
      title: tittle || 'Info',
      text: text,
      icon: 'info',
      confirmButtonColor: '#2196F3',
    })
  }

  warning(text: string, tittle?: string) {
    return Swal.fire({
      title: tittle || 'Advertencia',
      text: text,
      icon: 'warning',
      confirmButtonColor: '#FF7043',
    })
  }

  error(error: string, tittle?: string) {
    return Swal.fire({
      title: tittle || 'Error',
      text: error,
      icon: 'error',
      confirmButtonColor: '#EF5350',
    })
  }


}
