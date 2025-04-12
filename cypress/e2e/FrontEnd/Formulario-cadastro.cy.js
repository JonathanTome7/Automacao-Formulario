/// <reference types="cypress" />
import { faker } from "@faker-js/faker/locale/pt_BR";

const { it } = require("mocha");

describe('Criar Conta', () => {
    beforeEach(() => {
        cy.visit('formulario-cadastro/');
    } )

    it('Deve preencher o Formulário com sucesso', () => {
    
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');

});

    it('Campo nome deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo email deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })

    it('Campo data de nascimento deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo gênero deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo comentatio deve conter menos 250 caracteres', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo senha deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo termo deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('validar o botão limpar', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })
    it('Campo nome deve ser obrigatório', () => {
        
        cy.get('[data-testid="input-nome"]'). type(faker.person.fullName());
        cy.get('[data-testid="input-email"]').type(faker.internet.email());
        cy.get('[data-testid="input-telefone"]').type('61986610705');
        cy.get('[data-testid="input-nascimento"]').type('01072000');
        cy.get('.genero-opcoes > :nth-child(1) > input'). click ();
        cy.get('[data-testid="input-comentario"]').type('Um cmentario aasddddaasdsadsadsadasdasdasdaahhhhh');
        cy.get('[data-testid="input-senha"]') .type('123456');
        cy.get('.checkbox-label > input').click();
        cy.get('[data-testid="btn-submit"]') .click();
        cy.get('.success-message').should('contain.text', 'Cadastro realizado com sucesso!');


    })



});