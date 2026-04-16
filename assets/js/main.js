const disciplinas = [
    // =====================================================
    // SEGUNDA-FEIRA
    // =====================================================
    { dia: "Segunda", sala: "Sala 01", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Wilkson Sá", semestre: "4º Semestre", turma: "4º Semestre" },
    { dia: "Segunda", sala: "Sala 02", modalidade: "Presencial", curso: "Psicologia", disciplina: "Neuronatomofisiologia", professor: "Nayana Coutinho", semestre: "2º e 3º Semestre", turma: "4433820251A, 4433820252A" },
    { dia: "Segunda", sala: "Sala 04", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Processual Civil - Conhecimento e Processo Eletrônico", professor: "Claudio Luan", semestre: "4º Semestre", turma: "4831520242A" },
    { dia: "Segunda", sala: "Sala 05", modalidade: "EAD", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Segunda", sala: "Sala 06", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Penal - Teoria das Penas e Execução Penal", professor: "Matheus Rocha", semestre: "3º Semestre", turma: "4831520251A" },
    { dia: "Segunda", sala: "Sala 07", modalidade: "Presencial", curso: "Psicologia", disciplina: "Psicologia Social Noções Introdutórias", professor: "Juliana Veloso", semestre: "1º Semestre", turma: "4433820261A" },
    { dia: "Segunda", sala: "Sala 09", modalidade: "Presencial", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia III", professor: "Sandro Ueki", semestre: "6º Semestre", turma: "4433820232A" },
    { dia: "Segunda", sala: "Sala 10", modalidade: "EAD", curso: "Biomedicina", disciplina: "EAD", professor: "Ramilla Rocha", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Segunda", sala: "Sala 11", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Hidráulica e Hidrometria", professor: "Antenor Neto", semestre: "7º Semestre", turma: "494620231A" },
    { dia: "Segunda", sala: "Sala 12", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Civil - Contratos", professor: "Amauri Cativo", semestre: "3º Semestre", turma: "4831520251B" },
    { dia: "Segunda", sala: "Sala 16", modalidade: "EAD", curso: "Nutrição", disciplina: "EAD", professor: "Mahyá Martins", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Segunda", sala: "Sala 18", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Tributário", professor: "Rebeca Biasi", semestre: "7º Semestre", turma: "4831520231A" },
    { dia: "Segunda", sala: "Sala 19", modalidade: "EAD", curso: "Fisioterapia - Bacharelado", disciplina: "EAD", professor: "Diosé Lira", semestre: "1º e 8º Semestre", turma: "1º e 8º Semestre" },
    { dia: "Segunda", sala: "Sala 21", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "João Victor", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Segunda", sala: "Sala 23", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Cálculo Diferencial e Integral II", professor: "Elenildo Barros", semestre: "2º, 3º e 4º Semestre", turma: "494620242A, 494620251A, 494620252A" },
    { dia: "Segunda", sala: "Sala 25", modalidade: "EAD", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Segunda", sala: "Sala 26", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda, Erick Paduano", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Segunda", sala: "Sala 27", modalidade: "EAD", curso: "Enfermagem", disciplina: "EAD", professor: "Wenison", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre" },
    { dia: "Segunda", sala: "Sala 36", modalidade: "EAD", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "8º Semestre", turma: "8º Semestre" },
    { dia: "Segunda", sala: "Sala 37", modalidade: "EAD", curso: "Fisioterapia - Bacharelado", disciplina: "EAD", professor: "Daise Alves", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Segunda", sala: "Sala 29/30", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Penal - Crimes em Espécie", professor: "Luiz Paulo", semestre: "5º Semestre", turma: "4831520241A" },
    { dia: "Segunda", sala: "Sala 31/32", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Emanuella França", semestre: "1º Semestre", turma: "4831520261A" },
    { dia: "Segunda", sala: "Sala 33/34", modalidade: "Presencial", curso: "Psicologia", disciplina: "Psicologia Social Avançada", professor: "Clauber Torres", semestre: "9º Semestre", turma: "4433820221A, 4433820221B" },

    // =====================================================
    // TERÇA-FEIRA
    // =====================================================
    { dia: "Terça", sala: "Sala 01", modalidade: "Presencial", curso: "Psicologia", disciplina: "Metodologia da Pesquisa em Psicologia", professor: "Viviane Luz", semestre: "1º Semestre", turma: "4433820261A" },
    { dia: "Terça", sala: "Sala 02", modalidade: "Presencial", curso: "Psicologia", disciplina: "Métodos Quantitativos", professor: "Nayana Coutinho", semestre: "3º Semestre", turma: "4433820251A" },
    { dia: "Terça", sala: "Sala 04", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Artur", semestre: "5º Semestre", turma: "5º Semestre" },
    { dia: "Terça", sala: "Sala 05", modalidade: "EAD", curso: "Engenharia", disciplina: "EAD", professor: "Lucimar Pereira", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Terça", sala: "Sala 06", modalidade: "Presencial", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "6º Semestre", turma: "4831520232A" },
    { dia: "Terça", sala: "Sala 07", modalidade: "Presencial", curso: "Psicologia", disciplina: "Psicologia Organizacional e do Trabalho", professor: "Emylle Silva", semestre: "6º e 7º Semestre", turma: "4433820231A, 4433820232A" },
    { dia: "Terça", sala: "Sala 09", modalidade: "Presencial", curso: "Psicologia", disciplina: "Matrizes do Pensamento em Psicologia - Behaviorismo", professor: "Julia Veloso", semestre: "4º Semestre", turma: "4433820242A" },
    { dia: "Terça", sala: "Sala 10", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Civil - Sucessões", professor: "Maria Clara", semestre: "10º e 8º Semestre", turma: "4831520212A, 4831520222A" },
    { dia: "Terça", sala: "Sala 11", modalidade: "EAD", curso: "Pedagogia - Licenciatura", disciplina: "EAD", professor: "Alberiny Barros", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Terça", sala: "Sala 12", modalidade: "EAD", curso: "Biomedicina", disciplina: "EAD", professor: "Ramilla Rocha", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Terça", sala: "Sala 16", modalidade: "Presencial", curso: "Psicologia", disciplina: "Teorias e Técnicas de Grupo", professor: "Danianisse Balieiro", semestre: "5º Semestre", turma: "4433820241A" },
    { dia: "Terça", sala: "Sala 17", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Erick Paduano", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Terça", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "5º, 7º e 9º Semestre", turma: "494620221A, 494620231A, 494620241A" },
    { dia: "Terça", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Mecânica", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "8º Semestre", turma: "496820222A" },
    { dia: "Terça", sala: "Sala 19", modalidade: "EAD", curso: "Fisioterapia - Bacharelado", disciplina: "EAD", professor: "Diosé Lira", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Terça", sala: "Sala 21", modalidade: "EAD", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Terça", sala: "Sala 23", modalidade: "EAD", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "7º Semestre", turma: "7º Semestre" },
    { dia: "Terça", sala: "Sala 24", modalidade: "EAD", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Terça", sala: "Sala 25", modalidade: "EAD", curso: "Nutrição", disciplina: "EAD", professor: "Mahyá Martins", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Terça", sala: "Sala 26", modalidade: "EAD", curso: "Engenharia Mecânica", disciplina: "EAD", professor: "A Definir", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre" },
    { dia: "Terça", sala: "Sala 27", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Fernanda", semestre: "10º Semestre", turma: "10º Semestre" },
    { dia: "Terça", sala: "Sala 36", modalidade: "EAD", curso: "Engenharia de Produção", disciplina: "EAD", professor: "Francisco Lomanto", semestre: "7º Semestre", turma: "7º Semestre" },
    { dia: "Terça", sala: "Sala 37", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda", semestre: "10º Semestre", turma: "10º Semestre" },
    { dia: "Terça", sala: "Sala 29/30", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Penal de Crimes em espécie", professor: "Luiz Paulo", semestre: "4º Semestre", turma: "4831520242A" },
    { dia: "Terça", sala: "Sala 31/32", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Penal - Teoria das Penas e Execução Penal", professor: "Celson Cunha", semestre: "3º e 2º Semestre", turma: "4831520251B, 4831520252A" },
    { dia: "Terça", sala: "Sala 33/34", modalidade: "EAD", curso: "Enfermagem", disciplina: "EAD", professor: "Wenison", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Terça", sala: "Lab Info A", modalidade: "Presencial", curso: "Engenharia Civil/Mecânica", disciplina: "Algoritmos e Lógica de Programação", professor: "Jhosefy", semestre: "1º e 2º Semestre", turma: "496820252A, 494620261A" },

    // =====================================================
    // QUARTA-FEIRA
    // =====================================================
    { dia: "Quarta", sala: "Sala 01", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Wilkson Sá", semestre: "3º Semestre", turma: "3º Semestre" },
    { dia: "Quarta", sala: "Sala 02", modalidade: "Presencial", curso: "Psicologia", disciplina: "Desenvolvimento Humano II", professor: "Viviane Luz", semestre: "3º Semestre", turma: "4433820251A" },
    { dia: "Quarta", sala: "Sala 04", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda, Erick Paduano", semestre: "1º e 10º Semestre", turma: "1º e 10º Semestre" },
    { dia: "Quarta", sala: "Sala 05", modalidade: "Presencial", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Janaina Silva", semestre: "5º Semestre", turma: "4831520241A" },
    { dia: "Quarta", sala: "Sala 06", modalidade: "EAD", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Quarta", sala: "Sala 07", modalidade: "Presencial", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia III", professor: "Sandro Ueki", semestre: "7º Semestre", turma: "4433820231A" },
    { dia: "Quarta", sala: "Sala 09", modalidade: "Presencial", curso: "Engenharia Mecânica", disciplina: "Controle de Vibrações", professor: "Gabriel Nascimento", semestre: "8º Semestre", turma: "496820222A" },
    { dia: "Quarta", sala: "Sala 10", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Constitucional", professor: "Beatriz Sharon", semestre: "3º Semestre", turma: "4831520251B" },
    { dia: "Quarta", sala: "Sala 11", modalidade: "EAD", curso: "Nutrição", disciplina: "EAD", professor: "Mahyá Martins", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Quarta", sala: "Sala 12", modalidade: "Presencial", curso: "Psicologia", disciplina: "Matrizes do Pensamento em Psicologia - Existencial Humanista", professor: "Stella Cezimbra", semestre: "4º e 6º Semestre", turma: "4433820232A, 4433820242A" },
    { dia: "Quarta", sala: "Sala 16", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Química e Ciência dos Materiais", professor: "Nayana Coutinho", semestre: "1º e 4º Semestre", turma: "494620242A, 494620261A" },
    { dia: "Quarta", sala: "Sala 17", modalidade: "EAD", curso: "Pedagogia - Licenciatura", disciplina: "EAD", professor: "Alberiny Barros", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Quarta", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º Semestre", turma: "494620252A" },
    { dia: "Quarta", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Mecânica", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A" },
    { dia: "Quarta", sala: "Sala 19", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Topografia e Georreferenciamento", professor: "Gustavo Loureiro", semestre: "3º e 5º Semestre", turma: "494620241A, 494620251A" },
    { dia: "Quarta", sala: "Sala 21", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Coletivo do Trabalho e Tutelas Coletivas", professor: "Iolindemberg Mendes", semestre: "6º Semestre", turma: "4831520232A" },
    { dia: "Quarta", sala: "Sala 23", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Estruturas de Madeira e Estruturas Metálicas", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A" },
    { dia: "Quarta", sala: "Sala 24", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Artur", semestre: "5º Semestre", turma: "5º Semestre" },
    { dia: "Quarta", sala: "Sala 25", modalidade: "EAD", curso: "Terapia Ocupacional", disciplina: "EAD", professor: "Ana Paula", semestre: "-", turma: "-" },
    { dia: "Quarta", sala: "Sala 26", modalidade: "EAD", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Quarta", sala: "Sala 27", modalidade: "EAD", curso: "Fisioterapia - Bacharelado", disciplina: "EAD", professor: "Daise Alves", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Quarta", sala: "Sala 36", modalidade: "EAD", curso: "Engenharia de Produção", disciplina: "EAD", professor: "Francisco Lomanto", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Quarta", sala: "Sala 37", modalidade: "EAD", curso: "Engenharia Mecânica", disciplina: "EAD", professor: "Lucimar Pereira", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre" },
    { dia: "Quarta", sala: "Sala 29/30", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Civil - Contrato", professor: "Amauri Cativo", semestre: "4º e 3º Semestre", turma: "4831520242A, 4831520251A" },
    { dia: "Quarta", sala: "Sala 31/32", modalidade: "Presencial", curso: "Direito", disciplina: "Teoria Jurídica do Direito Penal", professor: "Higor Souza", semestre: "1º Semestre", turma: "4831520261A" },
    { dia: "Quarta", sala: "Sala 33/34", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "João Victor", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Quarta", sala: "Lab Enferm.", modalidade: "EAD", curso: "Enfermagem", disciplina: "EAD", professor: "Wenison", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },

    // =====================================================
    // QUINTA-FEIRA
    // =====================================================
    { dia: "Quinta", sala: "Sala 01", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Fernanda", semestre: "2º Semestre", turma: "2º Semestre" },
    { dia: "Quinta", sala: "Sala 02", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Administrativo", professor: "Claudio Luan", semestre: "9º Semestre", turma: "4831520221A, 4831520221B" },
    { dia: "Quinta", sala: "Sala 04", modalidade: "EAD", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Quinta", sala: "Sala 05", modalidade: "Presencial", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia II", professor: "Sandro Ueki", semestre: "5º Semestre", turma: "4433820241A" },
    { dia: "Quinta", sala: "Sala 06", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Constitucional", professor: "Emanuella França", semestre: "3º Semestre", turma: "4831520251A" },
    { dia: "Quinta", sala: "Sala 07", modalidade: "EAD", curso: "Enfermagem", disciplina: "EAD", professor: "Wenison", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Quinta", sala: "Sala 09", modalidade: "Presencial", curso: "Psicologia", disciplina: "Processos Psicológicos Básicos", professor: "Stella Cezimbra", semestre: "2º Semestre", turma: "4433820252A" },
    { dia: "Quinta", sala: "Sala 10", modalidade: "EAD", curso: "Administração e Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Quinta", sala: "Sala 11", modalidade: "Presencial", curso: "Direito", disciplina: "Teoria Geral do Processo", professor: "Maria Clara", semestre: "2º Semestre", turma: "4831520252A" },
    { dia: "Quinta", sala: "Sala 12", modalidade: "Presencial", curso: "Psicologia", disciplina: "Terapia Familiar Sistêmica", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A" },
    { dia: "Quinta", sala: "Sala 16", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Cálculo Diferencial e Integral I", professor: "Jhosefy", semestre: "1º Semestre", turma: "494620261A" },
    { dia: "Quinta", sala: "Sala 17", modalidade: "Híbrido", curso: "Psicologia", disciplina: "Psicologia Hospitalar", professor: "Julia Veloso", semestre: "9º Semestre", turma: "4433820221A, 4433820221B" },
    { dia: "Quinta", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Mecânica", disciplina: "Elementos de Máquinas", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A" },
    { dia: "Quinta", sala: "Sala 19", modalidade: "EAD", curso: "Engenharia Mecânica", disciplina: "EAD", professor: "A Definir", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre" },
    { dia: "Quinta", sala: "Sala 21", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Empresarial", professor: "Rebeca Biasi", semestre: "6º Semestre", turma: "4831520232A" },
    { dia: "Quinta", sala: "Sala 23", modalidade: "Híbrido", curso: "Engenharia Civil", disciplina: "Estruturas de Concreto Armado I", professor: "Valerry Garcia", semestre: "4º, 5º e 6º Semestre", turma: "494620231A, 494620241A, 494620242A" },
    { dia: "Quinta", sala: "Sala 24", modalidade: "EAD", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "8º Semestre", turma: "1º e 8º Semestre" },
    { dia: "Quinta", sala: "Sala 25", modalidade: "EAD", curso: "Nutrição", disciplina: "EAD", professor: "Mahyá Martins", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Quinta", sala: "Sala 26", modalidade: "EAD", curso: "Agronomia - Bacharelado", disciplina: "EAD", professor: "Khayo", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre" },
    { dia: "Quinta", sala: "Sala 27", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Administrativo", professor: "Higor Souza", semestre: "10º Semestre", turma: "4831520212A" },
    { dia: "Quinta", sala: "Sala 36", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda, Erick Paduano", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre" },
    { dia: "Quinta", sala: "Sala 37", modalidade: "EAD", curso: "Fisioterapia - Bacharelado", disciplina: "EAD", professor: "Diosé Lira", semestre: "9º Semestre", turma: "9º Semestre" },
    { dia: "Quinta", sala: "Sala 29/30", modalidade: "EAD", curso: "Engenharia", disciplina: "EAD", professor: "Lucimar Pereira", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Quinta", sala: "Sala 31/32", modalidade: "Presencial", curso: "Direito", disciplina: "Teoria Geral do Direito Constitucional", professor: "Beatriz Sharon", semestre: "1º Semestre", turma: "4831520261A" },
    { dia: "Quinta", sala: "Sala 33/34", modalidade: "Presencial", curso: "Psicologia", disciplina: "Bases Biológicas do Comportamento", professor: "Emylle Silva", semestre: "1º e 4º Semestre", turma: "4831520261A, 4433820242A" },

    // =====================================================
    // SEXTA-FEIRA
    // =====================================================
    { dia: "Sexta", sala: "Sala 01", modalidade: "Presencial", curso: "Psicologia", disciplina: "Psicopatologia II", professor: "Gisele Maraschin", semestre: "7º Semestre", turma: "4433820231A" },
    { dia: "Sexta", sala: "Sala 02", modalidade: "Presencial", curso: "Psicologia", disciplina: "Análise Experimental do Comportamento", professor: "Clauber Torres", semestre: "1º e 2º Semestre", turma: "4433820252A, 4433820261A" },
    { dia: "Sexta", sala: "Sala 05", modalidade: "Presencial", curso: "Psicologia", disciplina: "Matrizes do Pensamento em Psicologia - Psicanálise", professor: "Danianisse Balieiro", semestre: "4º e 5º Semestre", turma: "4433820241A, 4433820242A" },
    { dia: "Sexta", sala: "Sala 06", modalidade: "EAD", curso: "Licenciaturas - Pedagogia, Historia, Ed. Fisica e Matemática", disciplina: "EAD", professor: "Carla Girard", semestre: "1º Semestre", turma: "1º Semestre" },
    { dia: "Sexta", sala: "Sala 09", modalidade: "EAD", curso: "Engenharia Elétrica", disciplina: "EAD", professor: "Elika Sousa", semestre: "7º Semestre", turma: "7º Semestre" },
    { dia: "Sexta", sala: "Sala 10", modalidade: "Presencial", curso: "Psicologia", disciplina: "Teorias e Técnicas de Grupo", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A" },
    { dia: "Sexta", sala: "Sala 11", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Janaina Silva", semestre: "2º Semestre", turma: "4831520252A" },
    { dia: "Sexta", sala: "Sala 12", modalidade: "EAD", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda, Erick Paduano", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre" },
    { dia: "Sexta", sala: "Sala 16", modalidade: "Presencial", curso: "Engenharia Mecânica", disciplina: "Manufatura Mecânica - Usinagem", professor: "Gabriel Nascimento", semestre: "5º e 8º Semestre", turma: "496820222A, 496820241A" },
    { dia: "Sexta", sala: "Sala 18", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Estruturas Hiperestáticas", professor: "Elenildo Barros", semestre: "4º, 5º e 7º Semestre", turma: "494620231A, 494620241A, 494620242A" },
    { dia: "Sexta", sala: "Sala 19", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Física Geral e Experimental - Energia", professor: "Antenor Neto", semestre: "2º e 3º Semestre", turma: "494620251A, 494620252A" },
    { dia: "Sexta", sala: "Sala 23", modalidade: "Presencial", curso: "Engenharia Civil", disciplina: "Mecânica dos Solos e Obras de Terra", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A" },
    { dia: "Sexta", sala: "Sala 29/30", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Previdenciário", professor: "Iolindemberg Mendes", semestre: "4º Semestre", turma: "4831520241A, 4831520242A" },
    { dia: "Sexta", sala: "Sala 31/32", modalidade: "Presencial", curso: "Direito", disciplina: "Direito Processual Penal", professor: "Higor Souza", semestre: "6º e 7º Semestre", turma: "4831520231A, 4831520232A" },
    { dia: "Sexta", sala: "Sala 33/34", modalidade: "Presencial", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "3º Semestre", turma: "4831520251A, 4831520251B" }
];

// =====================================================
// LÓGICA DO SISTEMA (NÃO ALTERAR ABAIXO)
// =====================================================

let diaSelecionado = "Todos";

function carregarTabela(lista) {
    const tbody = document.getElementById("tabela-horarios");
    const contador = document.getElementById("total-registros");
    
    // ORDENAÇÃO AUTOMÁTICA (Dia da Semana -> Sala)
    const mapDias = { "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5, "Sábado": 6 };

    lista.sort((a, b) => {
        const diaA = mapDias[a.dia] || 99;
        const diaB = mapDias[b.dia] || 99;
        
        if (diaA !== diaB) {
            return diaA - diaB;
        }
        
        // Coloca salas que não começam com "Sala" para o fim ou trata de forma específica
        if (!a.sala.startsWith("Sala") && b.sala.startsWith("Sala")) return 1;
        if (a.sala.startsWith("Sala") && !b.sala.startsWith("Sala")) return -1;
        
        // Ordenação inteligente de salas (Texto + Número)
        return a.sala.localeCompare(b.sala, undefined, { numeric: true, sensitivity: 'base' });
    });

    tbody.innerHTML = "";

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px; color: #666;">Nenhuma aula encontrada para os filtros selecionados.</td></tr>`;
        contador.innerHTML = `<strong>Total de Registros:</strong> 0`;
        return;
    }

    lista.forEach(item => {
        let classeTag = "presencial";
        if (item.modalidade.toLowerCase().includes("ead")) classeTag = "ead";
        if (item.modalidade.toLowerCase().includes("híbrido") || item.modalidade.toLowerCase().includes("hibrido")) classeTag = "hibrido";

        // Formatação inteligente dos nomes
        const professorFormatado = item.professor.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        const codigos = item.turma.split(',').map(c => c.trim());
        const htmlCodigos = codigos.map(codigo => `<span class="code-badge">${codigo}</span>`).join('');

        const linha = `
            <tr>
                <td style="font-weight: bold; color: #ea5b2d;">${item.dia}</td>
                <td class="course-name" style="font-weight:700;">${item.curso}</td>
                <td><strong>${item.disciplina}</strong></td>
                <td>${professorFormatado}</td>
                <td>
                    <div style="font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">${item.semestre}</div>
                    <div class="turma-container">
                        ${htmlCodigos}
                    </div>
                </td>
                <td style="color: #444; font-weight: 700; text-transform: uppercase;">${item.sala}</td>
                <td><span class="tag ${classeTag}">${item.modalidade}</span></td>
            </tr>
        `;

        tbody.innerHTML += linha;
    });

    contador.innerHTML = `<strong>Total de Registros:</strong> ${lista.length} disciplinas encontradas.`;
}

function filtrarDia(dia) {
    diaSelecionado = dia;
    const botoes = document.querySelectorAll('.filter-btn');
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === dia) {
            btn.classList.add('active');
        }
    });
    filtrarTabela();
}

function filtrarTabela() {
    const termo = document.getElementById("searchInput").value.toLowerCase();

    const listaFiltrada = disciplinas.filter(item => {
        const matchDia = diaSelecionado === "Todos" || item.dia === diaSelecionado;
        const matchTexto = item.disciplina.toLowerCase().includes(termo) || 
                           item.professor.toLowerCase().includes(termo) ||
                           item.sala.toLowerCase().includes(termo) ||
                           item.curso.toLowerCase().includes(termo) ||
                           item.semestre.toLowerCase().includes(termo) ||
                           item.dia.toLowerCase().includes(termo);

        return matchDia && matchTexto;
    });

    carregarTabela(listaFiltrada);
}

document.addEventListener("DOMContentLoaded", () => {
    carregarTabela(disciplinas);
});