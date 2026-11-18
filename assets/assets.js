import logo from "./logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

export const categories = ["Main Ceremony", "Department", "VIP", "Parking", "Grad Night"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.8, review: "Met at the Student Union and transferred the Ticketmaster pass in two minutes. Super smooth and stress-free before commencement!", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Main Commencement Ceremony Ticket', category: 'Main Ceremony', id: 'prod_1' } },
    { id: "rat_2", rating: 5.0, review: "Needed an extra seat for my grandmother last minute. Paid via Venmo right after verifying the QR code on campus.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'College of Engineering Ceremony Pass', category: 'Department', id: 'prod_2' } },
    { id: "rat_3", rating: 4.9, review: "Way better than gambling on sketchy group chats. Verified student seller and fair price.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'East Garage Commencement Parking Pass', category: 'Parking', id: 'prod_3' } },
    { id: "rat_4", rating: 5.0, review: "Prompt communication and showed up right on time at the library coffee shop for the handoff.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'VIP Lower Bowl Guest Ticket', category: 'VIP', id: 'prod_4' } },
    { id: "rat_5", rating: 4.7, review: "Quick email transfer through the university portal once we met up. Definitely recommend.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'College of Business Morning Session', category: 'Department', id: 'prod_5' } },
    { id: "rat_6", rating: 5.0, review: "Saved my family from having to watch the livestream outside. Legit seller!", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Senior Grad Night Afterparty Wristband', category: 'Grad Night', id: 'prod_6' } },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Sarah M. - Class of 2026",
    description: "B.S. Computer Science graduate with 2 extra family allotment tickets. Accepting Venmo, Zelle, or Cash upon in-person digital transfer at the Student Union.",
    username: "sarahm2026",
    address: "Student Union Starbucks, Main Campus",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "sarahm2026@example.com",
    contact: "+0 1234567890",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "GradPass Admin",
        email: "admin@gradpass.edu",
        image: logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "Main Commencement Ceremony - Section 104",
        description: "Section 104, Row 12. Official university digital ticket transferred via Ticketmaster/Student Portal at meetup. Meet at Student Union.",
        mrp: 40,
        price: 25,
        images: [product_img1, product_img2, product_img3, product_img4],
        category: "Main Ceremony",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_2",
        name: "College of Engineering Morning Ceremony",
        description: "General Admission Arena Floor seating. Instant student portal email transfer upon Venmo/Cash payment at Engineering Quad.",
        mrp: 50,
        price: 30,
        images: [product_img2],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Department",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_3",
        name: "VIP Lower Bowl Guest Pass - Section 112",
        description: "Section 112, Row 4 right behind graduate floor seating. Mobile QR transfer in person at Main Library.",
        mrp: 60,
        price: 35,
        images: [product_img3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "VIP",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_4",
        name: "North Garage Reserved Commencement Parking",
        description: "Single-day garage permit directly adjacent to the arena entrance. PDF/Mobile pass transfer at campus meetup.",
        mrp: 40,
        price: 20,
        images: [product_img4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Parking",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_5",
        name: "College of Business Afternoon Ceremony",
        description: "Section 208, Row 6. Extra allotment ticket from graduating senior. Transfer via university ticketing app at Business Atrium.",
        mrp: 45,
        price: 25,
        images: [product_img5],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Department",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_6",
        name: "Senior Grad Night Celebration Wristband",
        description: "Official campus Grad Night event entry pass. Physical wristband handoff at Student Center lobby.",
        mrp: 55,
        price: 30,
        images: [product_img6],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Grad Night",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_7",
        name: "Main Ceremony Evening Session - Section 109",
        description: "Section 109, Row 15. Digital barcode transfer verified live at meetup before payment.",
        mrp: 40,
        price: 25,
        images: [product_img7],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Main Ceremony",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_8",
        name: "VIP Suite Level Family Pass",
        description: "Club level seating with direct elevator access for elderly family members. Meet at Arena Box Office.",
        mrp: 80,
        price: 45,
        images: [product_img8],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "VIP",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_9",
        name: "College of Arts & Sciences Ceremony Ticket",
        description: "Section 118, Row 9. Unused family guest pass. Instant mobile transfer at Campus Bookstore.",
        mrp: 35,
        price: 20,
        images: [product_img9],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Department",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_10",
        name: "West Lot Surface Parking Permit",
        description: "Valid all day for Friday commencement ceremonies. Digital pass transfer via student email.",
        mrp: 30,
        price: 15,
        images: [product_img10],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Parking",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_11",
        name: "Alumni & Senior Gala Ticket",
        description: "Includes entry to the Class of 2026 evening reception. Transferable digital QR code.",
        mrp: 50,
        price: 25,
        images: [product_img11],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Grad Night",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_12",
        name: "Main Ceremony Accessible Seating Pass",
        description: "ADA accessible seating Section 102 with companion seat option. Meet at Student Union.",
        mrp: 40,
        price: 20,
        images: [product_img12],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Main Ceremony",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
    }
];

export const ourSpecsData = [
    { title: "Instant Campus Meetup", description: "Reserve online and meet on campus to verify the ticket before paying.", icon: SendIcon, accent: '#05DF72' },
    { title: "Zero Upfront Risk", description: "Pay via Venmo, Zelle, or Cash only when the ticket is transferred to you.", icon: ClockFadingIcon, accent: '#FF8904' },
    { title: "Peer-to-Peer Support", description: "Direct coordination between graduating seniors and fellow students.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Alex Rivera",
    email: "arivera2026@example.com",
    street: "Student Union Starbucks",
    city: "3:00 PM Today",
    state: "FL",
    zip: "33199",
    country: "USA",
    phone: "3055550192",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const couponDummyData = [
    { code: "GRAD20", description: "20% Off First Ticket Reservation", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "CLASS10", description: "10% Off for Class of 2026", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "FAMILY20", description: "20% Off Multi-Ticket Bundle", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "PEER10", description: "10% Off All Ceremonies", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "SENIOR10", description: "10% Off Grad Night Passes", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Alex Rivera",
    email: "arivera2026@example.com",
    image: logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 55,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: dummyRatingsData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlydnx0017tat8h3rg92hz", quantity: 1, price: 25, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlxgnk0015tat84qm8si5v", quantity: 1, price: 30, product: productDummyData[1], }
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 80,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm1f3y001dtat8liccisar", quantity: 1, price: 35, product: productDummyData[2], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm0nh2001btat8glfvhry1", quantity: 1, price: 20, product: productDummyData[3], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemlz8640019tat8kz7emqca", quantity: 1, price: 25, product: productDummyData[4], }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Marcus T. - Class of 2026",
        description: "Mechanical Engineering senior selling 2 unused family commencement passes. Meet at Engineering Quad.",
        username: "marcust2026",
        address: "Engineering Quad Fountain, Main Campus",
        status: "approved",
        isActive: true,
        logo: logo,
        email: "marcust2026@example.com",
        contact: "+0 1234567890",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    },
    {
        id: "cmemkqnzm000htat8u7n8cpte",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "Sarah M. - Class of 2026",
        description: "B.S. Computer Science graduate with 2 extra family allotment tickets. Accepting Venmo, Zelle, or Cash upon in-person digital transfer at the Student Union.",
        username: "sarahm2026",
        address: "Student Union Starbucks, Main Campus",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "sarahm2026@example.com",
        contact: "+0 123456789",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "320.00",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 25.0 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 30.0 },
        { "createdAt": "2025-08-22T08:45:59.587Z", "total": 20.0 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 55.0 },
        { "createdAt": "2025-08-23T09:14:35.923Z", "total": 80.0 },
        { "createdAt": "2025-08-23T11:44:29.713Z", "total": 25.0 },
        { "createdAt": "2025-08-24T09:15:03.929Z", "total": 30.0 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 45.0 },
        { "createdAt": "2025-08-24T11:44:29.713Z", "total": 20.0 },
        { "createdAt": "2025-08-24T11:56:29.713Z", "total": 15.0 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 25.0 },
        { "createdAt": "2025-08-25T09:15:03.929Z", "total": 35.0 },
        { "createdAt": "2025-08-25T09:14:35.923Z", "total": 30.0 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 20.0 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 25.0 },
        { "createdAt": "2025-08-25T11:30:29.713Z", "total": 30.0 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 135,
    "totalProducts": 5
}