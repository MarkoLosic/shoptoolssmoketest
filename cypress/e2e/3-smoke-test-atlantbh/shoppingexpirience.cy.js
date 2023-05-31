/// <reference types="cypress" />

context("Login", () => {
    beforeEach(() => {
        cy.visit("https://shop.demoqa.com/");
        cy.clearAllCookies();
        cy.viewport(1024, 768);
    });

    it("Verification of Basic Product Purchase Functionality - Positive Smoke Test", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".noo-search").type("Dress{enter}");
        cy.get(".form-control").type("{enter}");
        //Search results
        cy.get(".post-1473 > .noo-product-inner").should("be.visible");
        cy.get(".post-1473 > .noo-product-inner > h3 > a").should(
            "have.text",
            "white milkmaid hook and eye bodycon midi dress"
        );
        cy.get(".post-1473 > .noo-product-inner > .posted_in > a").should(
            "have.text",
            "Bodycon Dresses"
        );
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-wrapper-outer > .owl-wrapper > .active > .hover-device > .product-one-thumb"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-controls > .owl-pagination"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .price > .woocommerce-Price-amount > bdi"
        ).should("be.visible");
        cy.get(".post-1473 > .noo-product-inner").click();
        //Product details page
        cy.get('[aria-hidden="false"] > .noo-woo-images__image').should(
            "be.visible"
        );
        cy.get(".product_title").should("be.visible");
        cy.get(".summary > .price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".product-essential__description").should("be.visible");
        cy.get(":nth-child(1) > .label > label").should("be.visible");
        cy.get(":nth-child(2) > .label > label").should("be.visible");
        cy.get(".quantity > span").should("be.visible");
        cy.get(".single_add_to_cart_button").should("be.visible");
        //Ordering a product, pick color, size and click on add to cart
        cy.get("#pa_color").select("White");
        cy.get("#pa_size").select("Medium");
        cy.get(".icon_plus").click();
        cy.get(".single_add_to_cart_button").click();
        cy.get(".woocommerce-message > .button").click();
        //Cart contains
        cy.get(".product-name > a").contains(
            "white milkmaid hook and eye bodycon midi dress - White"
        );
        cy.get(".product-price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".cart_item > .product-quantity").should("be.visible");
        cy.get(".product-subtotal > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".order-total > td").should("be.visible");
        cy.get(".wc-proceed-to-checkout > .checkout-button").click();
        //Inserting order details
        cy.get("#billing_first_name").type("Norah");
        cy.get("#billing_last_name").type("Jhonas");
        cy.get("#billing_company").type("Yeti");
        cy.get("#billing_address_1_field > label").type("Novi Delhi");
        cy.get("#billing_address_2").type("Nova adresa 2");
        cy.get("#billing_postcode").type("110001");
        cy.get("#billing_city").type("New Delhi");
        cy.get("#billing_phone").type("066321321");
        cy.get("#billing_email").type("test@gmail.com");
        cy.get("#order_comments").type("This is automated test written by cypress");
        cy.get("#terms").click();
        cy.get("#place_order").click();
        //Order details confirmation
        cy.get(".woocommerce-thankyou-order-received").contains(
            "Thank you. Your order has been received."
        );
        cy.get(":nth-child(4) > td").contains(
            "This is automated test written by cypress"
        );
        cy.get(":nth-child(2) > td").contains("Cash on delivery");
    });

    it("Verification of Basic Product Purchase Functionality - Negative Smoke Test", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".noo-search").type("Dress{enter}");
        cy.get(".form-control").type("{enter}");
        //Search results
        cy.get(".post-1473 > .noo-product-inner").should("be.visible");
        cy.get(".post-1473 > .noo-product-inner > h3 > a").should(
            "have.text",
            "white milkmaid hook and eye bodycon midi dress"
        );
        cy.get(".post-1473 > .noo-product-inner > .posted_in > a").should(
            "have.text",
            "Bodycon Dresses"
        );
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-wrapper-outer > .owl-wrapper > .active > .hover-device > .product-one-thumb"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-controls > .owl-pagination"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .price > .woocommerce-Price-amount > bdi"
        ).should("be.visible");
        cy.get(".post-1473 > .noo-product-inner").click();
        //Product details page
        cy.get('[aria-hidden="false"] > .noo-woo-images__image').should(
            "be.visible"
        );
        cy.get(".product_title").should("be.visible");
        cy.get(".summary > .price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".product-essential__description").should("be.visible");
        cy.get(":nth-child(1) > .label > label").should("be.visible");
        cy.get(":nth-child(2) > .label > label").should("be.visible");
        cy.get(".quantity > span").should("be.visible");
        cy.get(".single_add_to_cart_button").should("be.visible");
        //Ordering a product, pick color, size and click on add to cart
        cy.get("#pa_color").select("White");
        cy.get("#pa_size").select("Medium");
        cy.get(".icon_plus").click();
        cy.get(".single_add_to_cart_button").click();
        cy.get(".woocommerce-message > .button").click();
        //Cart contains
        cy.get(".product-name > a").contains(
            "white milkmaid hook and eye bodycon midi dress - White"
        );
        cy.get(".product-price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".cart_item > .product-quantity").should("be.visible");
        cy.get(".product-subtotal > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".order-total > td").should("be.visible");
        cy.get(".wc-proceed-to-checkout > .checkout-button").click();
        //Inserting order details
        cy.get("#billing_first_name").type("Norah");
        cy.get("#billing_last_name").type("Jhonas");
        cy.get("#billing_company").type("Yeti");
        cy.get("#billing_address_1_field > label").type("Novi Delhi");
        cy.get("#billing_address_2").type("Nova adresa 2");
        cy.get("#billing_postcode").type("110");
        cy.get("#billing_city").type("New Delhi");
        cy.get("#billing_phone").type("066321321");
        cy.get("#billing_email").type("test@gmail.com");
        cy.get("#order_comments").type("This is automated test written by cypress");
        cy.get("#terms").click().should("be.checked");
        cy.get("#place_order").click();
        //Negative case whrn Billing code is not valid postcode
        cy.get(".woocommerce-error").should("be.visible");
        cy.get(".woocommerce-error > li").contains(
            "Billing PIN Code is not a valid postcode / ZIP."
        );
    });

    it("Verification of Basic ACCOUNT CREATION Functionality on the e-commerce platform", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".pull-right > :nth-child(2) > a").click();
        //My account - inspect all elements
        cy.get(".u-column1 > h2").should("be.visible");
        cy.get(".u-column1 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column1 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(":nth-child(3) > .woocommerce-button").should("be.visible");
        cy.get("#rememberme").should("be.visible");
        cy.get(".woocommerce-LostPassword > a").should("be.visible");
        cy.get(".u-column2 > h2").should("be.visible");
        cy.get(".u-column2 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(3) > label").should(
            "be.visible"
        );
        cy.get(".woocommerce-Button").should("be.visible");
        //My Account func register
        cy.get("#reg_username").type("goranbaremajke");
        cy.get("#reg_email").type("goranbaremajke@gmail.com");
        cy.get("#reg_password").type("goranbaremajke");
        cy.get(".woocommerce-Button").click().wait(3000);
    });

    it("Verification of Basic LOGIN Functionality on the e-commerce platform positive smoke test", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".pull-right > :nth-child(2) > a").click();
        //My account - inspect all elements
        cy.get(".u-column1 > h2").should("be.visible");
        cy.get(".u-column1 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column1 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(":nth-child(3) > .woocommerce-button").should("be.visible");
        cy.get("#rememberme").should("be.visible");
        cy.get(".woocommerce-LostPassword > a").should("be.visible");
        cy.get(".u-column2 > h2").should("be.visible");
        cy.get(".u-column2 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(3) > label").should(
            "be.visible"
        );
        cy.get(".woocommerce-Button").should("be.visible");
        //My Account func login
        cy.get("#username").type("goranbaremajke");
        cy.get("#password").type("goranbaremajke");
        cy.get(":nth-child(3) > .woocommerce-button").click();
        cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
            "be.visible"
        );
        cy.get(
            ':nth-child(3) > [href="https://shop.demoqa.com/my-account/edit-address/"]'
        ).should("be.visible");
    });

    it("Verification of Basic LOGIN Functionality on the e-commerce platform negative smoke test", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".pull-right > :nth-child(2) > a").click();
        //My account - inspect all elements
        cy.get(".u-column1 > h2").should("be.visible");
        cy.get(".u-column1 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column1 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(":nth-child(3) > .woocommerce-button").should("be.visible");
        cy.get("#rememberme").should("be.visible");
        cy.get(".woocommerce-LostPassword > a").should("be.visible");
        cy.get(".u-column2 > h2").should("be.visible");
        cy.get(".u-column2 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(3) > label").should(
            "be.visible"
        );
        cy.get(".woocommerce-Button").should("be.visible");
        //My Account func login
        cy.get("#username").type("goranbaremajke");
        cy.get("#password").type("goranbaremajke12");
        cy.get(":nth-child(3) > .woocommerce-button").click();
        cy.get(".woocommerce-error").should("be.visible");
    });

    it("Verification of Basic Account Creation Functionality on the e-commerce platform with more accounts", () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".pull-right > :nth-child(2) > a").click();

        // My account - inspect all elements

        cy.get(".u-column1 > h2").should("be.visible");
        cy.get(".u-column1 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column1 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(":nth-child(3) > .woocommerce-button").should("be.visible");
        cy.get("#rememberme").should("be.visible");
        cy.get(".woocommerce-LostPassword > a").should("be.visible");
        cy.get(".u-column2 > h2").should("be.visible");
        cy.get(".u-column2 > .woocommerce-form > :nth-child(1) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(2) > label").should(
            "be.visible"
        );
        cy.get(".u-column2 > .woocommerce-form > :nth-child(3) > label").should(
            "be.visible"
        );
        cy.get(".woocommerce-Button").should("be.visible");

        // My Account func register

        cy.get("#reg_username").then(($username) => {
            const brojUnosa = Cypress._.random(1, 100); // Generisanje slučajnog broja
            const username = `goranbaremajke${brojUnosa}`;
            cy.wrap($username).type(username);
        });

        cy.get("#reg_email").then(($email) => {
            const brojUnosa = Cypress._.random(1, 100); // Generisanje slučajnog broja
            const email = `goranbaremajke${brojUnosa}@gmail.com`;
            cy.wrap($email).type(email);
        });

        cy.get("#reg_password").then(($password) => {
            const brojUnosa = Cypress._.random(1, 100); // Generisanje slučajnog broja
            const password = `goranbaremajke${brojUnosa}`;
            cy.wrap($password).type(password);
        });

        cy.get(".woocommerce-Button").click().wait(3000);
    });

    it('Verification of "My Wishlist" Functionality on the e-commerce platform', () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".noo-search").type("Dress{enter}");
        cy.get(".form-control").type("{enter}");
        //Search results
        cy.get(".post-1473 > .noo-product-inner").should("be.visible");
        cy.get(".post-1473 > .noo-product-inner > h3 > a").should(
            "have.text",
            "white milkmaid hook and eye bodycon midi dress"
        );
        cy.get(".post-1473 > .noo-product-inner > .posted_in > a").should(
            "have.text",
            "Bodycon Dresses"
        );
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-wrapper-outer > .owl-wrapper > .active > .hover-device > .product-one-thumb"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-controls > .owl-pagination"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .price > .woocommerce-Price-amount > bdi"
        ).should("be.visible");
        cy.get(".post-1473 > .noo-product-inner").click();
        //Product details page add to favorites
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist').click().wait(3000)
        cy.scrollTo('top');
        cy.get('.pull-right > :nth-child(1) > a').click()
        //My Wishlist
        cy.get('.product-name > a').should('be.visible')
        cy.get('#yith-wcwl-row-1473 > .product-thumbnail').should('be.visible')
        cy.get('#yith-wcwl-row-1473 > .product-price').should('be.visible')
        cy.get('#yith-wcwl-row-1473 > .product-stock-status').should('be.visible')
        //Remove from wishlist
        cy.get('.remove').click().wait(3000)
        cy.get('.wishlist-empty').should('be.visible')
    });

    it('Apply cupon code smoke test negative', () => {
        cy.get(".woocommerce-store-notice__dismiss-link").click();
        cy.get(".noo-container > p").contains("@ 2020. Copyright TOOLSQA");
        cy.get(".noo-search").type("Dress{enter}");
        cy.get(".form-control").type("{enter}");
        //Search results
        cy.get(".post-1473 > .noo-product-inner").should("be.visible");
        cy.get(".post-1473 > .noo-product-inner > h3 > a").should(
            "have.text",
            "white milkmaid hook and eye bodycon midi dress"
        );
        cy.get(".post-1473 > .noo-product-inner > .posted_in > a").should(
            "have.text",
            "Bodycon Dresses"
        );
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-wrapper-outer > .owl-wrapper > .active > .hover-device > .product-one-thumb"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .noo-product-thumbnail > .noo-product-slider > .owl-controls > .owl-pagination"
        ).should("be.visible");
        cy.get(
            ".post-1473 > .noo-product-inner > .price > .woocommerce-Price-amount > bdi"
        ).should("be.visible");
        cy.get(".post-1473 > .noo-product-inner").click();
        //Product details page
        cy.get('[aria-hidden="false"] > .noo-woo-images__image').should(
            "be.visible"
        );
        cy.get(".product_title").should("be.visible");
        cy.get(".summary > .price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".product-essential__description").should("be.visible");
        cy.get(":nth-child(1) > .label > label").should("be.visible");
        cy.get(":nth-child(2) > .label > label").should("be.visible");
        cy.get(".quantity > span").should("be.visible");
        cy.get(".single_add_to_cart_button").should("be.visible");
        //Ordering a product, pick color, size and click on add to cart
        cy.get("#pa_color").select("White");
        cy.get("#pa_size").select("Medium");
        cy.get(".icon_plus").click();
        cy.get(".single_add_to_cart_button").click();
        cy.get(".woocommerce-message > .button").click();
        //Cart contains
        cy.get(".product-name > a").contains(
            "white milkmaid hook and eye bodycon midi dress - White"
        );
        cy.get(".product-price > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".cart_item > .product-quantity").should("be.visible");
        cy.get(".product-subtotal > .woocommerce-Price-amount > bdi").should(
            "be.visible"
        );
        cy.get(".order-total > td").should("be.visible");
        cy.get(".wc-proceed-to-checkout > .checkout-button").click();
        //Inserting order details
        cy.get("#billing_first_name").type("Norah");
        cy.get("#billing_last_name").type("Jhonas");
        cy.get("#billing_company").type("Yeti");
        cy.get("#billing_address_1_field > label").type("Novi Delhi");
        cy.get("#billing_address_2").type("Nova adresa 2");
        cy.get("#billing_postcode").type("110001");
        cy.get("#billing_city").type("New Delhi");
        cy.get("#billing_phone").type("066321321");
        cy.get("#billing_email").type("test@gmail.com");
        cy.get("#order_comments").type("This is automated test written by cypress");
        cy.get("#terms").click();
        //Cupon code section
        cy.get('.woocommerce-form-coupon-toggle > .woocommerce-info').should("be.visible")
        cy.get('.showcoupon').click()
        cy.get('#coupon_code').type('CODE')
        cy.get('.form-row-last > .button').click()
        cy.get('.woocommerce-error').should('be.visible')
    });

});
