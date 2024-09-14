import { reactive } from 'vue'

export const store = reactive({
  cart: [],
  clients: [
    {
      name: 'João',
      lastName: 'Silva',
      cpf: '123.456.789-00',
      services: 5,
      address: 'Rua A, 123',
      phone: '(11) 99999-1111'
    },
    {
      name: 'Maria',
      lastName: 'Santos',
      cpf: '987.654.321-00',
      services: 2,
      address: 'Rua B, 456',
      phone: '(21) 98888-2222'
    },
    {
      name: 'Pedro',
      lastName: 'Oliveira',
      cpf: '111.222.333-00',
      services: 1,
      address: 'Rua C, 789',
      phone: '(31) 97777-3333'
    },
    {
      name: 'Ana',
      lastName: 'Costa',
      cpf: '234.567.890-12',
      services: 4,
      address: 'Rua D, 101',
      phone: '(41) 96666-4444'
    },
    {
      name: 'Carlos',
      lastName: 'Pereira',
      cpf: '345.678.901-23',
      services: 3,
      address: 'Rua E, 202',
      phone: '(51) 95555-5555'
    },
    {
      name: 'Fernanda',
      lastName: 'Almeida',
      cpf: '456.789.012-34',
      services: 6,
      address: 'Rua F, 303',
      phone: '(61) 94444-6666'
    },
    {
      name: 'Ricardo',
      lastName: 'Lima',
      cpf: '567.890.123-45',
      services: 2,
      address: 'Rua G, 404',
      phone: '(71) 93333-7777'
    },
    {
      name: 'Juliana',
      lastName: 'Martins',
      cpf: '678.901.234-56',
      services: 7,
      address: 'Rua H, 505',
      phone: '(81) 92222-8888'
    },
    {
      name: 'Eduardo',
      lastName: 'Souza',
      cpf: '789.012.345-67',
      services: 1,
      address: 'Rua I, 606',
      phone: '(91) 91111-9999'
    },
    {
      name: 'Patricia',
      lastName: 'Mendes',
      cpf: '890.123.456-78',
      services: 3,
      address: 'Rua J, 707',
      phone: '(02) 90000-0000'
    },
    {
      name: 'Luiz',
      lastName: 'Oliveira',
      cpf: '901.234.567-89',
      services: 5,
      address: 'Rua K, 808',
      phone: '(03) 89999-1111'
    },
    {
      name: 'Roberta',
      lastName: 'Ferreira',
      cpf: '012.345.678-90',
      services: 4,
      address: 'Rua L, 909',
      phone: '(04) 88888-2222'
    },
    {
      name: 'Gabriel',
      lastName: 'Rocha',
      cpf: '123.456.790-12',
      services: 2,
      address: 'Rua M, 010',
      phone: '(05) 87777-3333'
    },
    {
      name: 'Beatriz',
      lastName: 'Lima',
      cpf: '234.567.891-23',
      services: 6,
      address: 'Rua N, 121',
      phone: '(06) 86666-4444'
    },
    {
      name: 'Marcelo',
      lastName: 'Silva',
      cpf: '345.678.902-34',
      services: 3,
      address: 'Rua O, 232',
      phone: '(07) 85555-5555'
    },
    {
      name: 'Isabela',
      lastName: 'Costa',
      cpf: '456.789.013-45',
      services: 7,
      address: 'Rua P, 343',
      phone: '(08) 84444-6666'
    },
    {
      name: 'Ricardo',
      lastName: 'Souza',
      cpf: '567.890.124-56',
      services: 4,
      address: 'Rua Q, 454',
      phone: '(09) 83333-7777'
    },
    {
      name: 'Viviane',
      lastName: 'Santos',
      cpf: '678.901.235-67',
      services: 5,
      address: 'Rua R, 565',
      phone: '(10) 82222-8888'
    },
    {
      name: 'Joana',
      lastName: 'Almeida',
      cpf: '789.012.346-78',
      services: 2,
      address: 'Rua S, 676',
      phone: '(11) 81111-9999'
    },
    {
      name: 'Felipe',
      lastName: 'Pereira',
      cpf: '890.123.457-89',
      services: 1,
      address: 'Rua T, 787',
      phone: '(12) 80000-0000'
    },
    {
      name: 'Carla',
      lastName: 'Martins',
      cpf: '901.234.568-90',
      services: 6,
      address: 'Rua U, 898',
      phone: '(13) 79999-1111'
    }
  ],
  user: { name: '' },
  services: [
    { id: 1, name: 'Troca de Tela', price: 150 },
    { id: 2, name: 'Troca de Bateria', price: 100 },
    { id: 3, name: 'Reparo de Placa', price: 200 },
    { id: 4, name: 'Substituição de Conector de Carga', price: 80 },
    { id: 5, name: 'Troca de Alto-falante', price: 70 },
    { id: 6, name: 'Reparo de Botão Home', price: 90 },
    { id: 7, name: 'Desbloqueio de Celular', price: 50 },
    { id: 8, name: 'Atualização de Software', price: 40 },
    { id: 9, name: 'Reparo de Microfone', price: 85 },
    { id: 10, name: 'Recuperação de Dados', price: 250 },
    { id: 11, name: 'Troca de Câmera', price: 120 },
    { id: 12, name: 'Troca de Vidro Traseiro', price: 180 },
    { id: 13, name: 'Instalação de Película de Vidro', price: 30 },
    { id: 14, name: 'Limpeza Interna (remoção de poeira)', price: 50 },
    { id: 15, name: 'Correção de Problemas de Sinal', price: 100 },
    { id: 16, name: 'Reparo de Vibração', price: 60 },
    { id: 17, name: 'Substituição de Sensor de Proximidade', price: 75 }
  ],

  get cartCount() {
    return this.cart.length
  },

  addToCart(item) {
    this.cart.push(item)
  },

  addClient(client) {
    this.clients.push(client)
  },
  setUser(name) {
    this.user.name = name
  }
})
