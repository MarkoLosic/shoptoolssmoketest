/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://shop.demoqa.com/')
        cy.clearAllCookies()
        cy.viewport('iphone-6')
    })

    
    it.only(' Verification of Basic Product Purchase Functionality on Mobile Device - Negative Smoke Test', () => {
        cy.get('.woocommerce-store-notice__dismiss-link').click()
        cy.get('.noo-container > p').contains('@ 2020. Copyright TOOLSQA')
        cy.get('.post-1497 > .noo-product-inner > h3 > a').click()
        
        //Product details page
        cy.get('[aria-hidden="false"] > .noo-woo-images__image').should('be.visible')
        cy.get('.product_title').should('be.visible')
        cy.get('.summary > .price > .woocommerce-Price-amount > bdi').should('be.visible')
        cy.get('.product-essential__description').should('be.visible')
        cy.get(':nth-child(1) > .label > label').should('be.visible')
        cy.get(':nth-child(2) > .label > label').should('be.visible')
        cy.get('.quantity > span').should('be.visible')
        cy.get('.single_add_to_cart_button').should('be.visible')
        //Ordering a product, pick color, size and click on add to cart
        cy.get('#pa_color').select('Pink')
        cy.get('#pa_size').select('37')
        cy.get('.icon_plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        //Cart contains
        cy.get('.product-name > a').contains('pink drop shoulder oversized t shirt - Pink')
        cy.get('.wc-proceed-to-checkout > .checkout-button').click()

        //Inserting order details
        cy.get('#billing_first_name').type('Norah')
        cy.get('#billing_last_name').type('Jhonas')
        cy.get('#billing_company').type('Yeti')
        cy.get('#billing_address_1_field > label').type('Novi Delhi')
        cy.get('#billing_address_2').type('Nova adresa 2')
        cy.get('#billing_postcode').type('110')
        cy.get('#billing_city').type('New Delhi')
        cy.get('#billing_phone').type('066321321')
        cy.get('#billing_email').type('test@gmail.com')
        cy.get('#order_comments').type('This is automated test written by cypress')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        //Negative case whrn Billing code is not valid postcode
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error > li').contains('Billing PIN Code is not a valid postcode / ZIP.')
    });
    
    it.only(' Verification of Basic Product Purchase Functionality on Mobile Device - Positive Smoke Test', () => {
        cy.get('.woocommerce-store-notice__dismiss-link').click()
        cy.get('.noo-container > p').contains('@ 2020. Copyright TOOLSQA')
        cy.get('.post-1497 > .noo-product-inner > h3 > a').click()
        
        //Product details page
        cy.get('[aria-hidden="false"] > .noo-woo-images__image').should('be.visible')
        cy.get('.product_title').should('be.visible')
        cy.get('.summary > .price > .woocommerce-Price-amount > bdi').should('be.visible')
        cy.get('.product-essential__description').should('be.visible')
        cy.get(':nth-child(1) > .label > label').should('be.visible')
        cy.get(':nth-child(2) > .label > label').should('be.visible')
        cy.get('.quantity > span').should('be.visible')
        cy.get('.single_add_to_cart_button').should('be.visible')
        //Ordering a product, pick color, size and click on add to cart
        cy.get('#pa_color').select('Pink')
        cy.get('#pa_size').select('37')
        cy.get('.icon_plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        //Cart contains
        cy.get('.product-name > a').contains('pink drop shoulder oversized t shirt - Pink')
        cy.get('.wc-proceed-to-checkout > .checkout-button').click()

        //Inserting order details
        cy.get('#billing_first_name').type('Norah')
        cy.get('#billing_last_name').type('Jhonas')
        cy.get('#billing_company').type('Yeti')
        cy.get('#billing_address_1_field > label').type('Novi Delhi')
        cy.get('#billing_address_2').type('Nova adresa 2')
        cy.get('#billing_postcode').type('110001')
        cy.get('#billing_city').type('New Delhi')
        cy.get('#billing_phone').type('066321321')
        cy.get('#billing_email').type('test@gmail.com')
        cy.get('#order_comments').type('This is automated test written by cypress')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        //Order details confirmation
        cy.get('.woocommerce-thankyou-order-received').contains('Thank you. Your order has been received.')
        cy.get(':nth-child(4) > td').contains('This is automated test written by cypress')
        cy.get(':nth-child(2) > td').contains('Cash on delivery')
    });

})