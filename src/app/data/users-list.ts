import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        senha: 'senha-segura-123',
        idade: 30,
        endereco : {
            rua: 'Rua das Flores',
            numero: 42,
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil'
        },
        telefone: '11912345678',
        ativo: true,
        funcao: 'Desenvolvedor',
        dataCadastro: '2023-08-02T09:00:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2023-08-30T09:00:00.0023Z'
        }
    },
    {
        nome: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        senha: 'senha-forte-456',
        idade: 25,
        endereco: {
            rua: 'Avenida Central',
            numero: 100,
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            pais: 'Brasil'
        },
        telefone: '21345678901',
        ativo: true,
        funcao: 'Designer',
        dataCadastro: '2023-10-15T10:30:00.0023Z',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2023-11-20T14:45:00.0023Z'
        }
    },
    {
        nome: 'Carlos Santos',
        email: 'carlos.santos@example.com',
        senha: 'senha-segura-789',
        idade: 35,
        endereco: {
            rua: 'Rua da Paz',
            numero: 15,
            cidade: 'Belo Horizonte',
            estado: 'MG',
            pais: 'Brasil'
        },
        telefone: '3133334444',
        ativo: false,
        funcao: 'Analista de Negócios',
        dataCadastro: '2023-11-28T08:15:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2024-04-14T11:20:00.0023Z'
        }
    },
    {
        nome: 'Ana Souza',
        email: 'ana.souza@example.com',
        senha: 'senha-secreta-123',
        idade: 28,
        endereco: {
            rua: 'Rua dos Sonhos',
            numero: 20,
            cidade: 'Curitiba',
            estado: 'PR',
            pais: 'Brasil'
        },
        telefone: '41987654321',
        ativo: true,
        funcao: 'Analista de Marketing',
        dataCadastro: '2023-09-18T09:45:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2024-03-10T16:30:00.0023Z'
        }
    },
    {
        nome: 'Rafaela Lima',
        email: 'rafaela.lima@example.com',
        senha: 'senha-segura-987',
        idade: 32,
        endereco: {
            rua: 'Avenida Principal',
            numero: 75,
            cidade: 'Porto Alegre',
            estado: 'RS',
            pais: 'Brasil'
        },
        telefone: '51987654321',
        ativo: false,
        funcao: 'Gerente de Projetos',
        dataCadastro: '2023-12-05T11:00:00.0023Z',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2024-02-28T13:10:00.0023Z'
        }
    },
    {
        nome: 'Pedro Santos',
        email: 'pedro.santos@example.com',
        senha: 'senha-123456',
        idade: 40,
        endereco: {
            rua: 'Rua das Árvores',
            numero: 5,
            cidade: 'Salvador',
            estado: 'BA',
            pais: 'Brasil'
        },
        telefone: '71987654321',
        ativo: true,
        funcao: 'Analista Financeiro',
        dataCadastro: '2023-07-25T08:30:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2024-04-13T10:45:00.0023Z'
        }
    },
    {
        nome: 'Juliana Costa',
        email: 'juliana.costa@example.com',
        senha: 'senha-segura-456',
        idade: 29,
        endereco: {
            rua: 'Travessa da Amizade',
            numero: 10,
            cidade: 'Fortaleza',
            estado: 'CE',
            pais: 'Brasil'
        },
        telefone: '85987654321',
        ativo: true,
        funcao: 'Analista de Recursos Humanos',
        dataCadastro: '2023-08-30T10:20:00.0023Z',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2024-01-22T09:15:00.0023Z'
        }
    },
    {
        nome: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        senha: 'senha-forte-789',
        idade: 27,
        endereco: {
            rua: 'Rua dos Girassóis',
            numero: 30,
            cidade: 'Recife',
            estado: 'PE',
            pais: 'Brasil'
        },
        telefone: '81987654321',
        ativo: true,
        funcao: 'Analista de Qualidade',
        dataCadastro: '2023-06-12T14:00:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2024-04-05T15:50:00.0023Z'
        }
    },
    {
        nome: 'Gabriel Silva',
        email: 'gabriel.silva@example.com',
        senha: 'senha-secreta-456',
        idade: 31,
        endereco: {
            rua: 'Avenida das Estrelas',
            numero: 80,
            cidade: 'Brasília',
            estado: 'DF',
            pais: 'Brasil'
        },
        telefone: '61987654321',
        ativo: true,
        funcao: 'Engenheiro de Software',
        dataCadastro: '2023-04-22T13:30:00.0023Z',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2023-12-18T12:25:00.0023Z'
        }
    },
    {
        nome: 'Laura Gonçalves',
        email: 'laura.goncalves@example.com',
        senha: 'senha-123456',
        idade: 26,
        endereco: {
            rua: 'Rua das Maravilhas',
            numero: 25,
            cidade: 'Manaus',
            estado: 'AM',
            pais: 'Brasil'
        },
        telefone: '92987654321',
        ativo: true,
        funcao: 'Analista de Sistemas',
        dataCadastro: '2023-05-28T09:45:00.0023Z',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2024-03-30T10:20:00.0023Z'
        }
    },
    {
        nome: 'Lucas Almeida',
        email: 'lucas.almeida@example.com',
        senha: 'senha-segura-654',
        idade: 33,
        endereco: {
            rua: 'Avenida dos Sonhos',
            numero: 15,
            cidade: 'Porto Velho',
            estado: 'RO',
            pais: 'Brasil'
        },
        telefone: '69987654321',
        ativo: true,
        funcao: 'Analista de Suporte',
        dataCadastro: '2023-02-10T11:20:00.0023Z',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2024-02-15T09:35:00.0023Z'
        }
    }
    
]