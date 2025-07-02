import { TicketService } from '@/shared/services/ticket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss']
})
export class ProfileOrdersComponent {
  ticketData:any = [
    // { orderId: '#2245', productTitle: 'How can i share ?', status: 'Pending', statusClass: 'pending', view: 'Invoice' },
    // { orderId: '#2220', productTitle: 'Send money, but not working', status: 'Need your replay', statusClass: 'reply', view: 'Reply' },
    // { orderId: '#2125', productTitle: 'Balance error', status: 'Resolved', statusClass: 'done', view: 'Invoice' },
    // { orderId: '#2124', productTitle: 'How to decline bid', status: 'On Hold', statusClass: 'hold', view: 'Status' },
  ];
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    // Retrieve user orders from local storage
    // const ticketDataString = localStorage.getItem('userOrders');
    // if (ticketDataString) {
    //   this.ticketData = JSON.parse(ticketDataString);
    // } else {
    //   // If not found in local storage, fetch data from the service
    // }
    this.fetchTicketData();

  }
  
  fetchTicketData() {
    this.ticketService.getTicketData().subscribe(
      (data) => {
        this.ticketData = data;

        // Save the fetched data in local storage
        localStorage.setItem('userOrders', JSON.stringify(this.ticketData));
      },
      (error) => {
        console.error('Error fetching ticket data:', error);
      }
    );
  }
}
