import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeLink: string = "/files/all";

  constructor() { }

  ngOnInit(): void {
    // lấy tất cả các liên kết trong sidebar
    const links = document.querySelectorAll('.sidebar a');

    // lặp qua tất cả các liên kết và thêm trình nghe sự kiện nhấp chuột
    links.forEach(link => {
      link.addEventListener('click', () => {
        // loại bỏ lớp "active" khỏi tất cả các liên kết
        links.forEach(l => l.classList.remove('active'));
        // thêm lớp "active" vào liên kết được nhấp
        link.classList.add('active');
      });
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
