const disciplinas = [
    // =====================================================
    // SEGUNDA-FEIRA
    // =====================================================
    { dia: "Segunda", sala: "Sala 01", curso: "Direito", disciplina: "Direito Civil – Parte Geral", professor: "Emanuella França", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 02", curso: "Direito", disciplina: "Direito Penal – Crimes em Espécie", professor: "Luiz Paulo", semestre: "5° Semestre", turma: "4831520241A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 04", curso: "Direito", disciplina: "Direito Penal – Teoria das Penas", professor: "Matheus Rocha", semestre: "3° Semestre", turma: "4831520251A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 05", curso: "Direito", disciplina: "Direito Tributário", professor: "Rebeca Biasi", semestre: "7° Semestre", turma: "4831520231A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 06", curso: "Direito", disciplina: "Direito Civil – Contratos", professor: "Amauri Cativo", semestre: "3° Semestre", turma: "4831520251B", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 07", curso: "Psicologia", disciplina: "Psicologia Social Avançada", professor: "Clauber Torres", semestre: "9º Semestre", turma: "4433820221A, 4433820221B", modalidade: "Híbrido" },
    { dia: "Segunda", sala: "Sala 10", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia III", professor: "Sandro Ueki", semestre: "6º Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 11", curso: "Psicologia", disciplina: "Bases Biológicas do Comportamento", professor: "Stéphane Negrão", semestre: "4º Semestre", turma: "4433820242A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 12", curso: "Ciências Contábeis", disciplina: "Tutoria EAD", professor: "Lucivan Medina", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 16", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ramilla Rocha", semestre: "1º Semestre", turma: "1º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 17", curso: "Enfermagem", disciplina: "Tutoria EAD", professor: "Wenyson", semestre: "8º e 9º Semestre", turma: "8º e 9º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 18", curso: "Eng. Civil", disciplina: "Hidráulica e Hidrometria", professor: "Antenor Neto", semestre: "1º e 7º Semestre", turma: "494620231A, 494620261A", modalidade: "Híbrido" },
    { dia: "Segunda", sala: "Sala 19", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Marcele Moraes", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 21", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral II", professor: "Jhosefy", semestre: "2º, 3º e 4º Sem.", turma: "494620242A, 494620251A, 494620252A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 22", curso: "Administração", disciplina: "Tutoria EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 23", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Wilkson Sá", semestre: "4º Semestre", turma: "4º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 24", curso: "Nutrição", disciplina: "Tutoria EAD", professor: "Mahyá Martins", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 25", curso: "Fisioterapia", disciplina: "Tutoria EAD", professor: "Diosé Lira", semestre: "1º e 8º Semestre", turma: "1º e 8º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 26", curso: "Farmácia", disciplina: "Tutoria EAD", professor: "Arley Amanda, Erick Paduano", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 27", curso: "Psicologia", disciplina: "Neuroanatomofisiologia", professor: "Nayana Coutinho", semestre: "2º e 3º Semestre", turma: "4433820251A, 4433820252A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 31/32", curso: "Direito", disciplina: "Direito Processual Civil – Conhecimento", professor: "Claudio Luan", semestre: "4° Semestre", turma: "4831520242A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sem Sala", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ana Paula", semestre: "8º Semestre", turma: "8º SEMESTRE", modalidade: "EAD" },

    // =====================================================
    // TERÇA-FEIRA
    // =====================================================
    { dia: "Terça", sala: "Sala 01", curso: "Psicologia", disciplina: "Metodologia da Pesquisa em Psicologia", professor: "Stéphane Negrão", semestre: "1º Semestre", turma: "4433820261A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 02", curso: "Direito", disciplina: "Direito Penal de Crimes em espécie", professor: "Luiz Paulo", semestre: "4° Semestre", turma: "4831520242A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 04", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 05", curso: "Psicologia", disciplina: "Matrizes do Pensamento - Behaviorismo", professor: "Julia Veloso", semestre: "4º Semestre", turma: "4433820242A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 06", curso: "Fisioterapia", disciplina: "Tutoria EAD", professor: "Daise Alves, Diosé Lira", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 07", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ana Paula", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 09", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Danianisse Balieiro", semestre: "5º Semestre", turma: "4433820241A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 10", curso: "Psicologia", disciplina: "Métodos Quantitativos", professor: "Nayana Coutinho", semestre: "3º Semestre", turma: "4433820251A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 11", curso: "Administração", disciplina: "Tutoria EAD", professor: "Denise Pinheiro", semestre: "7º Semestre", turma: "7º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 12", curso: "Farmácia", disciplina: "Tutoria EAD", professor: "Arley Amanda, Erick Paduano", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 16", curso: "Pedagogia", disciplina: "Tutoria EAD", professor: "Alberiny Barros", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 17", curso: "Eng. Produção", disciplina: "Tutoria EAD", professor: "Francisco Lomanto", semestre: "7º Semestre", turma: "7º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 18", curso: "Eng. Mecânica", disciplina: "Tutoria EAD", professor: "Marcelo Cabral", semestre: "8º e 9º Semestre", turma: "8º e 9º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 19", curso: "Nutrição", disciplina: "Tutoria EAD", professor: "Mahyá Martins", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 21", curso: "Enfermagem", disciplina: "Tutoria EAD", professor: "Wenyson", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 23", curso: "Engenharia", disciplina: "Tutoria EAD", professor: "Lucimar Pereira", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 24", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Myrian Galvão", semestre: "10º Semestre", turma: "10º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 25", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Marcele Moraes", semestre: "5º Semestre", turma: "5º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 26", curso: "Ciências Contábeis", disciplina: "Tutoria EAD", professor: "Lucivan Medina", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 27", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "5º, 7º e 9º Sem.", turma: "494620221A, 494620231A, 494620241A", modalidade: "Híbrido" },
    { dia: "Terça", sala: "Sala 27", curso: "Eng. Mecânica", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "8º Semestre", turma: "496820222A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 29/30", curso: "Direito", disciplina: "Direito Civil - Sucessões", professor: "Maria Clara", semestre: "10º e 8º Sem.", turma: "4831520212A, 4831520222A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 31/32", curso: "Psicologia", disciplina: "Psicologia Organizacional e do Trabalho", professor: "Viviane Luz", semestre: "6º e 7º Semestre", turma: "4433820231A, 4433820232A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 33/34", curso: "Direito", disciplina: "Direito Penal - Teoria das Penas", professor: "Matheus Rocha", semestre: "3º e 2º Sem.", turma: "4831520251B, 4831520252A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Lab Info A", curso: "Eng. Mecânica", disciplina: "Algoritmos e Lógica de Programação", professor: "Jhosefy", semestre: "1º e 2º Semestre", turma: "496820252A, 494620261A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sem Sala", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ramilla Rocha", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },

    // =====================================================
    // QUARTA-FEIRA
    // =====================================================
    { dia: "Quarta", sala: "Sala 01", curso: "Direito", disciplina: "Teoria Jurídica do Direito Penal", professor: "Higor Souza", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 02", curso: "Direito", disciplina: "Direito Constitucional", professor: "Beatriz Sharon", semestre: "3° Semestre", turma: "4831520251B", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 04", curso: "Psicologia", disciplina: "Análise Experimental do Comportamento", professor: "Clauber Torres", semestre: "1º e 2º Semestre", turma: "4433820252A, 4433820261A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 05", curso: "Engenharia", disciplina: "Tutoria EAD", professor: "Lucimar Pereira", semestre: "1º Semestre", turma: "1º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 06", curso: "Eng. Civil", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º Semestre", turma: "494620252A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 06", curso: "Eng. Mecânica", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 07", curso: "Fisioterapia", disciplina: "Tutoria EAD", professor: "Diosé Lira", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 09", curso: "Eng. Civil", disciplina: "Topografia e Georreferenciamento", professor: "Gustavo Loureiro", semestre: "3º e 5º Semestre", turma: "494620241A, 494620251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 10", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Myrian Galvão", semestre: "1º Semestre", turma: "1º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 11", curso: "Psicologia", disciplina: "Desenvolvimento Humano II", professor: "Stéphane Negrão", semestre: "3º Semestre", turma: "4433820251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 12", curso: "Farmácia", disciplina: "Tutoria EAD", professor: "Arley Amanda, Erick Paduano", semestre: "1º e 10º Semestre", turma: "1º e 10º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 16", curso: "Eng. Civil", disciplina: "Química e Ciência dos Materiais", professor: "Nayana Coutinho", semestre: "1º e 4º Semestre", turma: "494620242A, 494620261A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 17", curso: "Pedagogia", disciplina: "Tutoria EAD", professor: "Alberiny Barros", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 18", curso: "Eng. Mecânica", disciplina: "Tutoria EAD", professor: "Marcelo Cabral", semestre: "10º Semestre", turma: "10º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 19", curso: "Nutrição", disciplina: "Tutoria EAD", professor: "Mahyá Martins", semestre: "1º Semestre", turma: "1º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 21", curso: "Direito", disciplina: "Direito Coletivo do Trabalho e Tutelas", professor: "Iolindemberg Mendes", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 23", curso: "Eng. Civil", disciplina: "Estruturas de Madeira e Estruturas Metálicas", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A", modalidade: "Híbrido" },
    { dia: "Quarta", sala: "Sala 25", curso: "Eng. Produção", disciplina: "Tutoria EAD", professor: "Francisco Lomanto", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 26", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia II", professor: "Sandro Ueki", semestre: "7º Semestre", turma: "4433820231A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 27", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Wilkson Sá", semestre: "3º Semestre", turma: "3º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 29/30", curso: "Psicologia", disciplina: "Matrizes Existencial Humanista", professor: "Stella Cezimbra", semestre: "4º e 6º Semestre", turma: "4433820232A, 4433820242A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 31/32", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Janaina Silva", semestre: "5° Semestre", turma: "4831520241A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 33/34", curso: "Direito", disciplina: "Direito Civil - Contrato", professor: "Amauri Cativo", semestre: "4º e 3º Sem.", turma: "4831520242A, 4831520251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Administração", disciplina: "Tutoria EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Eng. Mecânica", disciplina: "Controle de Vibrações", professor: "Gabriel Nascimento", semestre: "8º Semestre", turma: "496820222A", modalidade: "Híbrido" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Fisioterapia", disciplina: "Tutoria EAD", professor: "Daise Alves", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Ciências Contábeis", disciplina: "Tutoria EAD", professor: "Lucivan Medina", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Enfermagem", disciplina: "Tutoria EAD", professor: "Wenyson", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sem Sala", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Marcele Moraes", semestre: "5º Semestre", turma: "5º SEMESTRE", modalidade: "EAD" },

    // =====================================================
    // QUINTA-FEIRA
    // =====================================================
    { dia: "Quinta", sala: "Sala 01", curso: "Direito", disciplina: "Teoria Geral do Direito Constitucional", professor: "Beatriz Sharon", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 02", curso: "Direito", disciplina: "Teoria Geral do Processo", professor: "Maria Clara", semestre: "2° Semestre", turma: "4831520252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 04", curso: "Direito", disciplina: "Direito Constitucional", professor: "Emanuella França", semestre: "3° Semestre", turma: "4831520251A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 05", curso: "Direito", disciplina: "Direito Administrativo", professor: "Claudio Luan", semestre: "9° Semestre", turma: "4831520221A, 4831520221B", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 06", curso: "Direito", disciplina: "Direito Empresarial", professor: "Rebeca Biasi", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 07", curso: "Psicologia", disciplina: "História da Psicologia", professor: "Clauber Torres", semestre: "1º Semestre", turma: "4433820261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 09", curso: "Direito", disciplina: "Direito Administrativo", professor: "Higor Souza", semestre: "10° Semestre", turma: "4831520212A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 10", curso: "Enfermagem", disciplina: "Tutoria EAD", professor: "Wenyson", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 11", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral I", professor: "Jhosefy", semestre: "1º Semestre", turma: "494620261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 12", curso: "Farmácia", disciplina: "Tutoria EAD", professor: "Arley Amanda, Erick Paduano", semestre: "8º e 9º Semestre", turma: "8º e 9º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 16", curso: "Psicologia", disciplina: "Processos Psicológicos Básicos", professor: "Stella Cezimbra", semestre: "2º Semestre", turma: "4433820252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 17", curso: "Administração", disciplina: "Tutoria EAD", professor: "Denise Pinheiro", semestre: "1º e 8º Semestre", turma: "1º e 8º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 18", curso: "Psicologia", disciplina: "Terapia Familiar Sistêmica", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 19", curso: "Eng. Civil", disciplina: "Estruturas de Concreto Armado I", professor: "Valerry Garcia", semestre: "4º, 5º e 6º Sem.", turma: "494620231A, 494620241A, 494620242A", modalidade: "Híbrido" },
    { dia: "Quinta", sala: "Sala 21", curso: "Eng. Mecânica", disciplina: "Elementos de Máquinas", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 23", curso: "Nutrição", disciplina: "Tutoria EAD", professor: "Mahyá Martins", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 24", curso: "Eng. Mecânica", disciplina: "Tutoria EAD", professor: "Marcelo Cabral", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 25", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ana Paula", semestre: "6º e 7º Semestre", turma: "6º e 7º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 26", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Marcele Moraes", semestre: "2º Semestre", turma: "2º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 27", curso: "Biomedicina", disciplina: "Tutoria EAD", professor: "Ramilla Rocha/Ana Paula", semestre: "8º Semestre", turma: "8º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 29/30", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psicologia II", professor: "Sandro Ueki", semestre: "5º Semestre", turma: "4433820241A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 31/32", curso: "Psicologia", disciplina: "Psicologia Hospitalar", professor: "Julia Veloso", semestre: "9º Semestre", turma: "4433820221A, 4433820221B", modalidade: "Híbrido" },
    { dia: "Quinta", sala: "Sem Sala", curso: "Agronomia", disciplina: "Tutoria EAD", professor: "Myrian Galvão", semestre: "8º e 9º Semestre", turma: "8º e 9º SEMESTRE", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sem Sala", curso: "Fisioterapia", disciplina: "Tutoria EAD", professor: "Diosé Lira", semestre: "9º Semestre", turma: "9º SEMESTRE", modalidade: "EAD" },

    // =====================================================
    // SEXTA-FEIRA
    // =====================================================
    { dia: "Sexta", sala: "Sala 01", curso: "Psicologia", disciplina: "Matrizes do Pensamento - Psicanálise", professor: "Danianisse Balieiro", semestre: "4º e 5º Semestre", turma: "4433820241A, 4433820242A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 02", curso: "Psicologia", disciplina: "Psicopatologia II", professor: "Gisele Maraschin", semestre: "7º Semestre", turma: "4433820231A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 04", curso: "Direito", disciplina: "Direito Previdenciário", professor: "Iolindemberg Mendes", semestre: "4° Semestre", turma: "4831520241A, 4831520242A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 05", curso: "Psicologia", disciplina: "Psicologia Social Noções Introdutórias", professor: "Stéphane Negrão", semestre: "1º Semestre", turma: "4433820261A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 07", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Janaina Silva", semestre: "2° Semestre", turma: "4831520252A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 09", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 10", curso: "Licenciaturas", disciplina: "Tutoria (Ped, Hist, EdFis, Mat)", professor: "Carla Girard", semestre: "1º Semestre", turma: "1º SEMESTRE", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 11", curso: "Eng. Civil", disciplina: "Física Geral e Experimental - Energia", professor: "Antenor Neto", semestre: "2º e 3º Semestre", turma: "494620251A, 494620252A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 12", curso: "Eng. Civil", disciplina: "Mecânica dos Solos e Obras de Terra", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 16", curso: "Eng. Mecânica", disciplina: "Manufatura Mecânica – Usinagem", professor: "Gabriel Nascimento", semestre: "5º e 8º Semestre", turma: "496820222A, 496820241A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 17", curso: "Farmácia", disciplina: "Tutoria EAD", professor: "Arley Amanda, Erick Paduano", semestre: "2º e 3º Semestre", turma: "2º e 3º SEMESTRE", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 18", curso: "Eng. Elétrica", disciplina: "Tutoria EAD", professor: "Elika Sousa", semestre: "7º Semestre", turma: "7º SEMESTRE", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 19", curso: "Eng. Civil", disciplina: "Estruturas Hiperestáticas", professor: "Elenildo Barros", semestre: "4º, 5º e 7º Sem.", turma: "494620231A, 494620241A, 494620242A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 21", curso: "Direito", disciplina: "Direito Processual Penal", professor: "Higor Souza", semestre: "6º e 7º Sem.", turma: "4831520231A, 4831520232A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 29/30", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "3° Semestre", turma: "4831520251A, 4831520251B", modalidade: "Presencial" }
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
        
        // Se a sala for "Sem Sala", joga para o final da lista daquele dia
        if (a.sala === "Sem Sala" && b.sala !== "Sem Sala") return 1;
        if (a.sala !== "Sem Sala" && b.sala === "Sem Sala") return -1;
        
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
                <td style="color: #444; font-weight: 700;">${item.sala}</td>
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