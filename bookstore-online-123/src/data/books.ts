export interface Book { id: number; title: string; author: string; price: number; cover: string; discountPercent?: number; isNew?: boolean; }

export const CATEGORIES = ['Tất cả', 'Văn học', 'Kinh tế', 'Thiếu nhi', 'Kỹ năng sống', 'Truyện tranh', 'Ngoại ngữ', 'Lịch sử'];

export const BOOKS: Book[] = [
  { id: 1, title: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', price: 45000, cover: 'https://picsum.photos/seed/book1/400/560', discountPercent: 20 },
  { id: 2, title: 'Nhà Giả Kim', author: 'Paulo Coelho', price: 89000, cover: 'https://picsum.photos/seed/book2/400/560', isNew: true },
  { id: 3, title: 'Sapiens: Lược Sử Loài Người', author: 'Yuval Noah Harari', price: 129000, cover: 'https://picsum.photos/seed/book3/400/560' },
  { id: 4, title: 'Điều Kỳ Diệu Của Tiệm Tạp Hoá Namiya', author: 'Higashino Keigo', price: 98000, cover: 'https://picsum.photos/seed/book4/400/560', discountPercent: 15 },
  { id: 5, title: 'Muôn Kiếp Nhân Sinh', author: 'Nguyên Phong', price: 150000, cover: 'https://picsum.photos/seed/book5/400/560' },
  { id: 6, title: 'Cách Nghĩ Để Thành Công', author: 'Napoleon Hill', price: 79000, cover: 'https://picsum.photos/seed/book6/400/560', isNew: true },
];
