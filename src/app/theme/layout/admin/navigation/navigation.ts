export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    classes: 'first-group',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'analytics',
        title: 'Analytics',
        type: 'item',
        classes: 'nav-item',
        url: '/analytics',
        icon: 'ti ti-device-analytics',
        breadcrumbs: false
      },
      {
        id: 'finance',
        title: 'Finance',
        type: 'item',
        classes: 'nav-item',
        url: '/finance',
        icon: 'ti ti-currency-dollar',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'widget',
    title: 'Widget',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'statistics',
        title: 'Statistics',
        type: 'item',
        classes: 'nav-item',
        url: '/widget/statistics',
        icon: 'ti ti-chart-arcs'
      },
      {
        id: 'data',
        title: 'Data',
        type: 'item',
        classes: 'nav-item',
        url: '/widget/data',
        icon: 'ti ti-clipboard-list'
      },
      {
        id: 'chart',
        title: 'Chart',
        type: 'item',
        classes: 'nav-item',
        url: '/widget/chart',
        icon: 'ti ti-chart-infographic'
      }
    ]
  },
  {
    id: 'layout demo',
    title: 'Layout Demo',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'vertical',
        title: 'Vertical',
        type: 'item',
        classes: 'nav-item',
        url: '/layout/vertical',
        icon: 'ti ti-layout-sidebar',
        target: true
      },
      {
        id: 'horizontal',
        title: 'Horizontal',
        type: 'item',
        classes: 'nav-item',
        url: '/layout/horizontal',
        icon: 'ti ti-layout-navbar',
        target: true
      },
      {
        id: 'compact',
        title: 'Compact',
        type: 'item',
        classes: 'nav-item',
        url: '/layout/compact',
        icon: 'ti ti-layout',
        target: true
      }
    ]
  },
  {
    id: 'admin',
    title: 'Admin Panel',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Online-Courses',
        title: 'Online Courses',
        type: 'collapse',
        icon: 'ti ti-book',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/online-course/dashboard'
          },
          {
            id: 'teacher',
            title: 'Teacher',
            type: 'collapse',
            children: [
              {
                id: 'list',
                title: 'List',
                type: 'item',
                url: '/online-course/teacher/list'
              },
              {
                id: 'apply',
                title: 'Apply',
                type: 'item',
                url: '/online-course/teacher/apply'
              },
              {
                id: 'add',
                title: 'Add',
                type: 'item',
                url: '/online-course/teacher/add'
              }
            ]
          },
          {
            id: 'student',
            title: 'Student',
            type: 'collapse',
            children: [
              {
                id: 'list',
                title: 'List',
                type: 'item',
                url: '/online-course/student/list'
              },
              {
                id: 'apply',
                title: 'Apply',
                type: 'item',
                url: '/online-course/student/apply'
              },
              {
                id: 'add',
                title: 'Add',
                type: 'item',
                url: '/online-course/student/add'
              }
            ]
          },
          {
            id: 'courses',
            title: 'Courses',
            type: 'collapse',
            children: [
              {
                id: 'view',
                title: 'View',
                type: 'item',
                url: '/online-course/courses/view'
              },
              {
                id: 'add',
                title: 'Add',
                type: 'item',
                url: '/online-course/courses/add'
              }
            ]
          },
          {
            id: 'pricing',
            title: 'Pricing',
            type: 'item',
            url: '/online-course/pricing'
          },
          {
            id: 'site',
            title: 'Site',
            type: 'item',
            url: '/online-course/site'
          },
          {
            id: 'setting',
            title: 'Setting',
            type: 'collapse',
            children: [
              {
                id: 'payment',
                title: 'Payment',
                type: 'item',
                url: '/online-course/setting/payment'
              },
              {
                id: 'pricing',
                title: 'Pricing',
                type: 'item',
                url: '/online-course/setting/price'
              },
              {
                id: 'notification',
                title: 'Notification',
                type: 'item',
                url: '/online-course/setting/notification'
              }
            ]
          }
        ]
      },
      {
        id: 'membership',
        title: 'Membership',
        type: 'collapse',
        icon: 'ti ti-users',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/membership/dashboard'
          },
          {
            id: 'list',
            title: 'List',
            type: 'item',
            url: '/membership/list'
          },
          {
            id: 'price',
            title: 'Pricing',
            type: 'item',
            url: '/membership/price'
          },
          {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/membership/setting'
          }
        ]
      },
      {
        id: 'helpdesk',
        title: 'Helpdesk',
        type: 'collapse',
        icon: 'ti ti-help',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/helpdesk/dashboard'
          },
          {
            id: 'ticket',
            title: 'Ticket',
            type: 'collapse',
            children: [
              {
                id: 'create',
                title: 'Create',
                type: 'item',
                url: '/helpdesk/ticket/create'
              },
              {
                id: 'list',
                title: 'List',
                type: 'item',
                url: '/helpdesk/ticket/list'
              },
              {
                id: 'details',
                title: 'Details',
                type: 'item',
                url: '/helpdesk/ticket/details'
              }
            ]
          },
          {
            id: 'customer',
            title: 'Customer',
            type: 'item',
            url: '/helpdesk/customer'
          }
        ]
      },
      {
        id: 'invoice',
        title: 'Invoice',
        type: 'collapse',
        icon: 'ti ti-file-invoice',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/invoice/dashboard'
          },
          {
            id: 'create',
            title: 'Create',
            type: 'item',
            url: '/invoice/create'
          },
          {
            id: 'details',
            title: 'Details',
            type: 'item',
            url: '/invoice/details'
          },
          {
            id: 'list',
            title: 'List',
            type: 'item',
            url: '/invoice/list'
          },
          {
            id: 'edit',
            title: 'Edit',
            type: 'item',
            url: '/invoice/edit'
          }
        ]
      }
    ]
  },
  {
    id: 'application',
    title: 'Application',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'user',
        title: 'Users',
        type: 'collapse',
        icon: 'ti ti-user-check',
        children: [
          {
            id: 'social-profile',
            title: 'Social Profile',
            type: 'item',
            url: '/user/social-profile'
          },
          {
            id: 'accountProfile',
            title: 'Account Profile',
            type: 'collapse',
            children: [
              {
                id: 'profileOne',
                title: 'Profile 01',
                type: 'item',
                url: '/user/accountProfile/profileOne'
              },
              {
                id: 'profileTwo',
                title: 'Profile 02',
                type: 'item',
                url: '/user/accountProfile/profileTwo'
              },
              {
                id: 'profileThree',
                title: 'Profile 03',
                type: 'item',
                url: '/user/accountProfile/profileThree'
              }
            ]
          },
          {
            id: 'card',
            title: 'Cards',
            type: 'collapse',
            children: [
              {
                id: 'styleV1',
                title: 'Style 01',
                type: 'item',
                url: '/user/cards/styleV1'
              },
              {
                id: 'styleV2',
                title: 'Style 02',
                type: 'item',
                url: '/user/cards/styleV2'
              },
              {
                id: 'styleV3',
                title: 'Style 03',
                type: 'item',
                url: '/user/cards/styleV3'
              }
            ]
          },
          {
            id: 'list',
            title: 'List',
            type: 'collapse',
            children: [
              {
                id: 'listStyleV1',
                title: 'Style 01',
                type: 'item',
                url: '/user/list/listStyleV1'
              },
              {
                id: 'listStyleV2',
                title: 'Style 02',
                type: 'item',
                url: '/user/list/listStyleV2'
              }
            ]
          }
        ]
      },
      {
        id: 'customer',
        title: 'Customer',
        type: 'collapse',
        icon: 'ti ti-basket',
        children: [
          {
            id: 'customer-list',
            title: 'Customer-List',
            type: 'item',
            url: '/customer/customerList'
          },
          {
            id: 'order-list',
            title: 'Order-List',
            type: 'item',
            url: '/customer/orderList'
          },
          {
            id: 'create-invoice',
            title: 'Create Invoice',
            type: 'item',
            url: '/customer/createInvoice'
          },
          {
            id: 'order-details',
            title: 'Order Details',
            type: 'item',
            url: '/customer/orderDetails'
          },
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/customer/products'
          },
          {
            id: 'productReview',
            title: 'Products Review',
            type: 'item',
            url: '/customer/productReview'
          }
        ]
      },
      {
        id: 'chat',
        title: 'Chat',
        type: 'item',
        classes: 'nav-item',
        url: '/chat',
        icon: 'ti ti-messages'
      },
      {
        id: 'kanban',
        title: 'Kanban',
        type: 'item',
        classes: 'nav-item',
        url: '/kanban',
        icon: 'ti ti-layout-kanban'
      },
      {
        id: 'mail',
        title: 'Mail',
        type: 'item',
        classes: 'nav-item',
        url: '/mail',
        icon: 'ti ti-mail'
      },
      {
        id: 'calender',
        title: 'Calender',
        type: 'item',
        classes: 'nav-item',
        url: '/calender',
        icon: 'ti ti-calendar'
      },
      {
        id: 'contact',
        title: 'Contact',
        type: 'collapse',
        icon: 'ti ti-nfc',
        children: [
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/contact/cards'
          },
          {
            id: 'co-lits',
            title: 'List',
            type: 'item',
            url: '/contact/list'
          }
        ]
      },
      {
        id: 'ecommerce',
        title: 'Ecommerce',
        type: 'collapse',
        icon: 'ti ti-basket',
        children: [
          {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/ec/ec-product'
          },
          {
            id: 'product-detail',
            title: 'Product-Detail',
            type: 'item',
            url: '/ec/ec-product-detail'
          },
          {
            id: 'product-list',
            title: 'Product-List',
            type: 'item',
            url: '/ec/ec-product-list'
          },
          {
            id: 'checkout',
            title: 'Checkout',
            type: 'item',
            url: '/ec/ec-checkout'
          }
        ]
      }
    ]
  },
  {
    id: 'element',
    title: 'Element',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'ti ti-typography'
      },
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'ti ti-apps',
        classes: 'menu-scroll',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb',
            title: 'Breadcrumb',
            type: 'item',
            url: '/basic/breadcrumb'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/basic/carousel'
          },
          {
            id: 'dropdowns',
            title: 'Dropdowns',
            type: 'item',
            url: '/basic/dropdowns'
          },
          {
            id: 'offcanvas',
            title: 'Offcanvas',
            type: 'item',
            url: '/basic/offcanvas'
          },
          {
            id: 'placeholder',
            title: 'Placeholder',
            type: 'item',
            url: '/basic/placeholder'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/basic/progress'
          },
          {
            id: 'listGroup',
            title: 'List Group',
            type: 'item',
            url: '/basic/listGroup'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/basic/modal'
          },
          {
            id: 'spinner',
            title: 'Spinner',
            type: 'item',
            url: '/basic/spinner'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            type: 'item',
            url: '/basic/toasts'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/basic/other'
          }
        ]
      },
      {
        id: 'advance',
        title: 'Advance',
        type: 'collapse',
        icon: 'ti ti-briefcase',
        children: [
          {
            id: 'sweetAlert',
            title: 'Sweet Alert',
            type: 'item',
            url: '/advance/sweetAlert'
          },
          {
            id: 'datepicker',
            title: 'Datepicker',
            type: 'item',
            url: '/advance/datepicker'
          },
          {
            id: 'lightbox',
            title: 'Lightbox',
            type: 'item',
            url: '/advance/lightbox'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/advance/modal'
          },
          {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/advance/notification'
          },
          {
            id: 'rangeSlider',
            title: 'RangeSlider',
            type: 'item',
            url: '/advance/rangeSlider'
          },
          {
            id: 'treeView',
            title: 'Tree view',
            type: 'item',
            url: '/advance/treeView'
          }
        ]
      },
      {
        id: 'icons',
        title: 'Icons',
        type: 'collapse',
        icon: 'ti ti-plant-2',
        children: [
          {
            id: 'Table',
            title: 'Tabler',
            type: 'item',
            url: 'https://tabler-icons.io/',
            target: true,
            external: true
          }
        ]
      }
    ]
  },
  {
    id: 'form',
    title: 'Forms',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'form-elements',
        title: 'Form Elements',
        type: 'collapse',
        icon: 'ti ti-forms',
        children: [
          {
            id: 'form-basic',
            title: 'Form Basic',
            type: 'item',
            url: '/forms/basic'
          },
          {
            id: 'form-float',
            title: 'Form Floating',
            type: 'item',
            url: '/forms/floating'
          },
          {
            id: 'form-options',
            title: 'Form Options',
            type: 'item',
            url: '/forms/options'
          },
          {
            id: 'input-group',
            title: 'Input Group',
            type: 'item',
            url: '/forms/input-group'
          },
          {
            id: 'form-checkbox',
            title: 'CheckBox',
            type: 'item',
            url: '/forms/checkbox'
          },
          {
            id: 'form-radio',
            title: 'Radio',
            type: 'item',
            url: '/forms/radio'
          },
          {
            id: 'form-switch',
            title: 'Switch',
            type: 'item',
            url: '/forms/switch'
          },
          {
            id: 'mega-option',
            title: 'Mega Option',
            type: 'item',
            url: '/forms/mega-option'
          }
        ]
      },
      {
        id: 'form-plugin',
        title: 'Form Plugins',
        type: 'collapse',
        icon: 'ti ti-plug',
        children: [
          {
            id: 'date-picker',
            title: 'Date Picker',
            type: 'item',
            url: '/fPlugin/date-picker'
          },
          {
            id: 'input-select',
            title: 'Input Select',
            type: 'item',
            url: '/fPlugin/input-select'
          },
          {
            id: 'google-captcha',
            title: 'Google-Re-Captcha',
            type: 'item',
            url: '/fPlugin/gRecaptcha'
          },
          {
            id: 'input-mask',
            title: 'Input Mask',
            type: 'item',
            url: '/fPlugin/input-mask'
          },
          {
            id: 'clipboard',
            title: 'ClipBoard',
            type: 'item',
            url: '/fPlugin/clipboard'
          },
          {
            id: 'typeAhead',
            title: 'TypeaHead',
            type: 'item',
            url: '/fPlugin/typeAhead'
          }
        ]
      },
      {
        id: 'form-validation',
        title: 'Form Validation',
        type: 'item',
        classes: 'nav-item',
        url: '/form-validation',
        icon: 'ti ti-clipboard-check'
      },
      {
        id: 'text-editor',
        title: 'Text Editor',
        type: 'collapse',
        icon: 'ti ti-pencil',
        children: [
          {
            id: 'Quill',
            title: 'Quill Editor',
            type: 'item',
            url: '/textEditor/quill-editor'
          },
          {
            id: 'editor',
            title: 'Editor',
            type: 'item',
            url: '/textEditor/editor'
          }
        ]
      },
      {
        id: 'form-layout',
        title: 'Form Layouts',
        type: 'collapse',
        icon: 'ti ti-layout',
        children: [
          {
            id: 'frm-layout',
            title: 'Layouts',
            type: 'item',
            url: '/form-layout/layout'
          },
          {
            id: 'frm-multiColumn',
            title: 'MultiColumn',
            type: 'item',
            url: '/form-layout/multiColumn'
          },
          {
            id: 'frm-actionBars',
            title: 'ActionBars',
            type: 'item',
            url: '/form-layout/actionBars'
          },

          {
            id: 'sticky-actionBar',
            title: 'Sticky-ActionBar',
            type: 'item',
            url: '/form-layout/stickyBar'
          }
        ]
      },
      {
        id: 'file-upload',
        title: 'File Upload',
        type: 'collapse',
        icon: 'ti ti-cloud-upload',
        children: [
          {
            id: 'dropzone',
            title: 'Dropzone',
            type: 'item',
            url: '/fileUpload/dropzone'
          }
        ]
      },
      {
        id: 'images-cropper',
        title: 'Images Cropper',
        type: 'item',
        classes: 'nav-item',
        url: '/imagesCropper',
        icon: 'ti ti-crop'
      }
    ]
  },
  {
    id: 'table',
    title: 'Tables',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ng-table',
        title: 'Bootstrap Table',
        type: 'collapse',
        icon: 'ti ti-table',
        children: [
          {
            id: 'ng-basic-table',
            title: 'Basic Table',
            type: 'item',
            url: '/ng-table/basicTable'
          },
          {
            id: 'filter-table',
            title: 'Filter Table',
            type: 'item',
            url: '/ng-table/filterTable'
          },
          {
            id: 'pagination-table',
            title: 'pagination Table',
            type: 'item',
            url: '/ng-table/pagination'
          },
          {
            id: 'ng-table',
            title: 'Ng Table',
            type: 'item',
            url: '/ng-table/ngTable'
          }
        ]
      },
      {
        id: 'tbl-dataTable',
        title: 'Data Table',
        type: 'item',
        classes: 'nav-item',
        url: '/dataTables',
        icon: 'ti ti-table'
      }
    ]
  },
  {
    id: 'chart map',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'chart',
        title: 'Charts',
        type: 'collapse',
        icon: 'ti ti-chart-pie',
        children: [
          {
            id: 'apex-chart',
            title: 'Apex Chart',
            type: 'item',
            url: '/chart/apex-chart'
          }
        ]
      },
      {
        id: 'map',
        title: 'Map',
        type: 'collapse',
        icon: 'ti ti-map',
        children: [
          {
            id: 'google-map',
            title: 'Google Map',
            type: 'item',
            url: '/map/googleMap'
          }
        ]
      }
    ]
  },
  {
    id: 'pages',
    title: 'pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'authenticationV1',
            title: 'Authentication 1',
            type: 'collapse',
            children: [
              {
                id: 'v1-login',
                title: 'Login',
                type: 'item',
                url: '/auth/auth1/login',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-register',
                title: 'Register',
                type: 'item',
                url: '/auth/auth1/register',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-forgetPassword',
                title: 'Forget Password',
                type: 'item',
                url: '/auth/auth1/forgetPassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-checkMail',
                title: 'Check Mail',
                type: 'item',
                url: '/auth/auth1/checkMail',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-resetpassword',
                title: 'Reset Password',
                type: 'item',
                url: '/auth/auth1/resetpassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-codeVerification',
                title: 'Code Verification',
                type: 'item',
                url: '/auth/auth1/codeVerification',
                target: true,
                breadcrumbs: false
              }
            ]
          },
          {
            id: 'authenticationV2',
            title: 'Authentication 2',
            type: 'collapse',
            children: [
              {
                id: 'v2-login',
                title: 'Login',
                type: 'item',
                url: '/auth/auth2/login',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v2-register',
                title: 'Register',
                type: 'item',
                url: '/auth/auth2/register',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v2-forgetPassword',
                title: 'Forget Password',
                type: 'item',
                url: '/auth/auth2/forgetPassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v1-checkMail',
                title: 'Check Mail',
                type: 'item',
                url: '/auth/auth2/checkMail',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v2-resetpassword',
                title: 'Reset Password',
                type: 'item',
                url: '/auth/auth2/resetpassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v2-codeVerification',
                title: 'Code Verification',
                type: 'item',
                url: '/auth/auth2/codeVerification',
                target: true,
                breadcrumbs: false
              }
            ]
          },
          {
            id: 'authenticationsV3',
            title: 'Authentication 3',
            type: 'collapse',
            children: [
              {
                id: 'v3-login',
                title: 'Login',
                type: 'item',
                url: '/auth/auth3/login',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v3-register',
                title: 'Register',
                type: 'item',
                url: '/auth/auth3/register',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v3-forgetPassword',
                title: 'Forget Password',
                type: 'item',
                url: '/auth/auth3/forgetPassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v3-checkMail',
                title: 'Check Mail',
                type: 'item',
                url: '/auth/auth3/checkMail',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v3-resetpassword',
                title: 'Reset Password',
                type: 'item',
                url: '/auth/auth3/resetpassword',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'v3-codeVerification',
                title: 'Code Verification',
                type: 'item',
                url: '/auth/auth3/codeVerification',
                target: true,
                breadcrumbs: false
              }
            ]
          }
        ]
      },
      {
        id: 'price',
        title: 'Price',
        type: 'collapse',
        icon: 'ti ti-receipt-2',
        children: [
          {
            id: 'Price 1',
            title: 'Price 1',
            type: 'item',
            url: '/price/price-1'
          },
          {
            id: 'Price 2',
            title: 'Price 2',
            type: 'item',
            url: '/price/price-2'
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'collapse',
        icon: 'ti ti-bug',
        children: [
          {
            id: 'error',
            title: 'Error 404',
            type: 'item',
            url: '/maintenance/error404',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'coming-soon',
            title: 'Coming-Soon',
            type: 'collapse',
            children: [
              {
                id: 'coming-v1',
                title: 'Coming Soon-1',
                type: 'item',
                url: '/maintenance/comingSoon/comingSoon-1',
                target: true,
                breadcrumbs: false
              },
              {
                id: 'coming-v2',
                title: 'Coming Soon-2',
                type: 'item',
                url: '/maintenance/comingSoon/comingSoon-2',
                target: true,
                breadcrumbs: false
              }
            ]
          },
          {
            id: 'Under constructor',
            title: 'Under construction',
            type: 'item',
            url: '/maintenance/constructor',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'contact',
        title: 'Contact Us',
        type: 'item',
        url: '/contact-us',
        icon: 'ti ti-phone-call',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'faq',
        title: 'FAQ',
        type: 'item',
        url: '/faq',
        icon: 'ti ti-question-mark',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'p-policy',
        title: 'Private Policy',
        type: 'item',
        url: '/private-policy',
        icon: 'ti ti-shield-lock',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'landing',
        title: 'Landing',
        type: 'item',
        url: '/landing',
        icon: 'ti ti-rocket',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'menu-level',
        title: 'Menu levels',
        type: 'collapse',
        icon: 'ti ti-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Level 2.2',
            type: 'collapse',
            classes: 'edge',
            children: [
              {
                id: 'menu-level-3.1',
                title: 'Level 3.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-3.2',
                title: 'Level 3.2',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-3.3',
                title: 'Level 3.3',
                type: 'collapse',
                classes: 'edge',
                children: [
                  {
                    id: 'menu-level-4.1',
                    title: 'Level 4.1',
                    type: 'item',
                    url: 'javascript:',
                    external: true
                  },
                  {
                    id: 'menu-level-4.2',
                    title: 'Level 4.2',
                    type: 'item',
                    url: 'javascript:',
                    external: true
                  }
                ]
              }
            ]
          },
          {
            id: 'menu-level-2.3',
            title: 'Level 2.3',
            type: 'collapse',
            classes: 'edge',
            children: [
              {
                id: 'menu-level-3.1',
                title: 'Level 3.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-3.2',
                title: 'Level 3.2',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-3.3',
                title: 'Level 3.3',
                type: 'collapse',
                classes: 'edge',
                children: [
                  {
                    id: 'menu-level-4.1',
                    title: 'Level 4.1',
                    type: 'item',
                    url: 'javascript:',
                    external: true
                  },
                  {
                    id: 'menu-level-4.2',
                    title: 'Level 4.2',
                    type: 'item',
                    url: 'javascript:',
                    external: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'samplePage',
        title: 'Sample Page',
        type: 'item',
        classes: 'nav-item',
        url: '/samplePage',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/berry-angular/',
        icon: 'ti ti-vocabulary',
        target: true,
        external: true
      }
    ]
  }
];
