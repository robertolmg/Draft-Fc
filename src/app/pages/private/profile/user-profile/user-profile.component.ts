// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  // public props
  passwordForm!: FormGroup;
  private userDetailsForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.passwordForm = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordsMatchValidator }
    );

    this.userDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      shortBio: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.userService.GetCurrentUserDetails().then((user) => {
      this.userDetailsForm.patchValue(user);
    });
  } 

  onSubmit() {}

  onSubmitUserForm() {
    this.userService.GetCurrentUserDetails().then((user) => {
      user.firstName = this.userDetailsForm.get('firstName')?.value;
      user.lastName = this.userDetailsForm.get('lastName')?.value;
      user.state = this.userDetailsForm.get('state')?.value;
      user.city = this.userDetailsForm.get('city')?.value;
      user.shortBio = this.userDetailsForm.get('shortBio')?.value;
      user.contactNumber = this.userDetailsForm.get('contactNumber')?.value;
      user.email = this.userDetailsForm.get('email')?.value;
      user.updatedAt = new Date();
      this.userService.UpsertUser(user.id, user);
    });
  }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }

  // private Method
  infoList = [
    {
      icon: 'email',
      user: 'Email',
      text: 'demo@sample.com'
    },
    {
      icon: 'phonelink_ring',
      user: 'Phone',
      text: '(+99) 9999 999 999'
    },
    {
      icon: 'pin_drop',
      user: 'Location',
      text: 'Melbourne'
    }
  ];

  social = [
    {
      total: '37',
      user: 'Mails'
    },
    {
      total: '2749',
      user: 'Followers'
    },
    {
      total: '678',
      user: 'Following'
    }
  ];

  taskList = [
    {
      title: 'Full Name',
      name: 'John Doe'
    },
    {
      title: 'Fathers Name',
      name: 'Mr. Deepen Handgun'
    },
    {
      title: 'Address',
      name: 'Street 110-B Kalians Bag, Dewan, M.P. INDIA'
    },
    {
      title: 'Zip Code',
      name: '12345'
    },
    {
      title: 'Phone',
      name: '+0 123456789 , +0 123456789'
    },
    {
      title: 'Email',
      name: 'support@example.com'
    },
    {
      title: 'Website',
      name: 'http://example.com'
    }
  ];

  education = [
    {
      year: '2014-2017',
      course: 'Master Degree',
      title: 'Master Degree in Computer Application',
      text: 'University of Oxford, England',
      space: 'mb-3'
    },
    {
      year: '2011-2013',
      course: 'Bechelor',
      title: 'Bachelor Degree in Computer Engineering',
      text: 'Imperial College London',
      space: 'mb-3'
    },
    {
      year: '2009-2011',
      course: 'School',
      title: 'Higher Secondry Education',
      text: 'School of London, England'
    }
  ];

  socialMedia = [
    {
      media: 'Facebook',
      icon: 'fab fa-facebook-f',
      bgColor: 'btn-facebook'
    },
    {
      media: 'Twitter',
      icon: 'fab fa-twitter',
      bgColor: 'btn-twitter'
    },
    {
      media: 'Google Plus',
      icon: 'fab fa-google-plus-g',
      bgColor: 'btn-googleplus'
    }
  ];

  deviceList = [
    {
      icon: 'icon-monitor',
      color: 'text-success',
      status: 'Current Active',
      title: 'Cett Desktop',
      describe: ' | 4351 Deans Lane, Elmsford'
    },
    {
      icon: 'icon-tablet',
      color: 'text-muted',
      status: 'Active 5 days ago',
      title: 'Imoon Tablet',
      describe: ' | 4185 Michigan Avenue, SHIPPINGPORT'
    },
    {
      icon: 'icon-smartphone',
      color: 'text-muted',
      status: 'Active 1 month ago',
      title: 'Asbs Mobile',
      describe: ' | 3462 Fairfax Drive, Montclair'
    }
  ];

  activityRelated = [
    {
      activity: 'have new notifications'
    },
    {
      activity: "You're sent a direct message"
    },
    {
      activity: 'Someone adds you as a connection'
    }
  ];

  activityRelated2 = [
    {
      activity: 'Upon new order'
    },
    {
      activity: 'New membership approval'
    },
    {
      activity: 'Member registration'
    }
  ];

  activityRelated3 = [
    {
      activity: 'News about PCT-themes products and feature updates'
    },
    {
      activity: 'Tips on getting more out of PCT-themes'
    },
    {
      activity: 'Things you missed since you last logged into PCT-themes'
    },
    {
      activity: 'News about products and other services'
    },
    {
      activity: 'Tips and Document business products'
    }
  ];

  settings = [
    {
      title: 'Secure Browsing',
      text: "Browsing Securely ( https ) when it's necessary"
    },
    {
      title: 'Login Notifications',
      text: 'Notify when login attemped from outher place'
    },
    {
      title: 'Login Approvals',
      text: 'Approvals is not required when login from unrecognized devices.'
    }
  ];

  sessions = [
    {
      title: 'Cett Desktop',
      describe: ' | 4351 Deans Lane, Elmsford',
      space: 'mb-2'
    },
    {
      title: 'Imoon Tablet',
      describe: ' | 4185 Michigan Avenue, SHIPPINGPORT'
    }
  ];
}
