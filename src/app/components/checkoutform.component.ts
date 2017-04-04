import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent {
    email: string;

    step1() {
        var check = $(".form1").hasClass("hidden");
        if(check == true) {
            $(".form-horizontal").fadeOut(700, () => {
                $("#ind2").removeClass("selected");
                $("#ind3").removeClass("selected");
                $("#ind1").removeClass("unselected");
                $("#ind1").addClass("selected");
                $(".form2").addClass("hidden");
                $(".form3").addClass("hidden");
                $(".form1").removeClass("hidden");
                $(".form-horizontal").fadeIn(700, () => {});
            });
        }
    }

    step2() {
        var check = $(".form2").hasClass("hidden");
        if(check == true) {
            $(".form-horizontal").fadeOut(700, () => {
                $("#ind1").removeClass("selected");
                $("#ind3").removeClass("selected");
                $("#ind2").removeClass("unselected");
                $("#ind2").addClass("selected");
                $(".form1").addClass("hidden");
                $(".form3").addClass("hidden");
                $(".form2").removeClass("hidden");
                $(".form-horizontal").fadeIn(700, () => {});
            });
        }
    }

    step3() {
        var check = $(".form3").hasClass("hidden");
        if(check == true) {
            $(".form-horizontal").fadeOut(700, () => {
                $("#ind1").removeClass("selected");
                $("#ind2").removeClass("selected");
                $("#ind3").removeClass("unselected");
                $("#ind3").addClass("selected");
                $(".form1").addClass("hidden");
                $(".form2").addClass("hidden");
                $(".form3").removeClass("hidden");
                $(".form-horizontal").fadeIn(700, () => {});
            });
        }
    }
}
