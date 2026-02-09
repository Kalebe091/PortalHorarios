const disciplinas = [
    // =====================================================
    // CURSO: DIREITO
    // =====================================================

    // --- SEGUNDA-FEIRA ---
    { dia: "Segunda", curso: "Direito", disciplina: "Direito Civil – Parte Geral", professor: "Emanuella França", semestre: "1° Semestre", turma: "4831520261A", sala: "Sala 01", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Direito", disciplina: "Direito Penal – Crimes em Espécie", professor: "Luiz Paulo", semestre: "5° Semestre", turma: "4831520241A", sala: "Sala 02", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Direito", disciplina: "Direito Penal – Teoria das Penas", professor: "Matheus Rocha", semestre: "3° Semestre", turma: "4831520251A", sala: "Sala 04", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Direito", disciplina: "Direito Tributário", professor: "Rebeca Biasi", semestre: "7° Semestre", turma: "4831520231A", sala: "Sala 05", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Direito", disciplina: "Direito Civil – Contratos", professor: "Amauri Cativo", semestre: "3° Semestre", turma: "4831520251B", sala: "Sala 06", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Direito", disciplina: "Proc. Civil – Conhecimento", professor: "Claudio Luan", semestre: "4° Semestre", turma: "4831520242A", sala: "Sala 31/32", modalidade: "Presencial" },

    // --- TERÇA-FEIRA ---
    { dia: "Terça", curso: "Direito", disciplina: "Direito Penal – Teoria das Penas", professor: "Matheus Rocha", semestre: "3º e 2º Sem.", turma: "4831520251B, 4831520252A", sala: "Sala 01", modalidade: "Presencial" },
    { dia: "Terça", curso: "Direito", disciplina: "Direito Penal de Crimes em espécie", professor: "Luiz Paulo", semestre: "4° Semestre", turma: "4831520242A", sala: "Sala 02", modalidade: "Presencial" },
    { dia: "Terça", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "6° Semestre", turma: "4831520232A", sala: "Sala 07", modalidade: "Presencial" },
    { dia: "Terça", curso: "Direito", disciplina: "Direito Civil - Sucessões", professor: "Maria Clara", semestre: "10º e 8º Sem.", turma: "4831520212A, 4831520222A", sala: "Sala 29/30", modalidade: "Presencial" },

    // --- QUARTA-FEIRA ---
    { dia: "Quarta", curso: "Direito", disciplina: "Teoria Jurídica do Direito Penal", professor: "Higor Souza", semestre: "1° Semestre", turma: "4831520261A", sala: "Sala 01", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Direito", disciplina: "Direito Constitucional", professor: "Beatriz Sharon", semestre: "3° Semestre", turma: "4831520251B", sala: "Sala 02", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Direito", disciplina: "Direito Coletivo do Trabalho", professor: "Iolindemberg Mendes", semestre: "6° Semestre", turma: "4831520232A", sala: "Sala 21", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Janaina Silva", semestre: "5° Semestre", turma: "4831520241A", sala: "Sala 31/32", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Direito", disciplina: "Direito Civil - Contrato", professor: "Amauri Cativo", semestre: "4º e 3º Sem.", turma: "4831520242A, 4831520251A", sala: "Sala 33/34", modalidade: "Presencial" },

    // --- QUINTA-FEIRA ---
    { dia: "Quinta", curso: "Direito", disciplina: "Teoria Geral do Dir. Constitucional", professor: "Beatriz Sharon", semestre: "1° Semestre", turma: "4831520261A", sala: "Sala 01", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Direito", disciplina: "Teoria Geral do Processo", professor: "Maria Clara", semestre: "2° Semestre", turma: "4831520252A", sala: "Sala 02", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Direito", disciplina: "Direito Constitucional", professor: "Emanuella França", semestre: "3° Semestre", turma: "4831520251A", sala: "Sala 04", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Direito", disciplina: "Direito Administrativo", professor: "Claudio Luan", semestre: "9° Semestre", turma: "4831520221A, 4831520221B", sala: "Sala 05", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Direito", disciplina: "Direito Empresarial", professor: "Rebeca Biasi", semestre: "6° Semestre", turma: "4831520232A", sala: "Sala 06", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Direito", disciplina: "Direito Administrativo", professor: "Higor Souza", semestre: "10° Semestre", turma: "4831520212A", sala: "Sala 09", modalidade: "Presencial" },

    // --- SEXTA-FEIRA ---
    { dia: "Sexta", curso: "Direito", disciplina: "Direito Previdenciário", professor: "Iolindemberg Mendes", semestre: "4° Semestre", turma: "4831520241A, 4831520242A", sala: "Sala 04", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Janaina Silva", semestre: "2° Semestre", turma: "4831520252A", sala: "Sala 07", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Direito", disciplina: "Direito Processual Penal", professor: "Higor Souza", semestre: "6º e 7º Sem.", turma: "4831520231A, 4831520232A", sala: "Sala 21", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "3° Semestre", turma: "4831520251A, 4831520251B", sala: "Sala 29/30", modalidade: "Presencial" },


    // =====================================================
    // CURSOS: ENGENHARIAS (CIVIL E MECÂNICA)
    // =====================================================

    { dia: "Segunda", curso: "Eng. Civil", disciplina: "Hidráulica e Hidrometria", professor: "Antenor Neto", semestre: "1º e 7º Semestre", turma: "494620231A, 494620261A", sala: "Sala 18", modalidade: "Híbrido" },
    { dia: "Segunda", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral II", professor: "Jhosefy", semestre: "2º, 3º e 4º Sem.", turma: "494620242A, 494620251A, 494620252A", sala: "Sala 21", modalidade: "Presencial" },

    { dia: "Terça", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "5º, 7º e 9º Sem.", turma: "494620221A, 494620231A, 494620241A", sala: "Sala 27", modalidade: "Híbrido" },
    { dia: "Terça", curso: "Eng. Mecânica", disciplina: "Cálculo Diferencial e Integral III", professor: "Elenildo Barros", semestre: "8º Semestre", turma: "496820222A", sala: "Sala 27", modalidade: "Presencial" },
    { dia: "Terça", curso: "Eng. Mecânica", disciplina: "Algoritmos e Lógica de Programação", professor: "Jhosefy", semestre: "1º e 2º Semestre", turma: "496820252A, 494620261A", sala: "Lab Info A", modalidade: "Presencial" },

    { dia: "Quarta", curso: "Eng. Civil", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º Semestre", turma: "494620252A", sala: "Sala 06", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Eng. Mecânica", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A", sala: "Sala 06", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Eng. Civil", disciplina: "Topografia e Georreferenciamento", professor: "Gustavo Loureiro", semestre: "3º e 5º Semestre", turma: "494620241A, 494620251A", sala: "Sala 09", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Eng. Civil", disciplina: "Química e Ciência dos Materiais", professor: "Nayana Coutinho", semestre: "1º e 4º Semestre", turma: "494620242A, 494620261A", sala: "Sala 16", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Eng. Civil", disciplina: "Estruturas de Madeira e Metálicas", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A", sala: "Sala 23", modalidade: "Híbrido" },
    { dia: "Quarta", curso: "Eng. Mecânica", disciplina: "Controle de Vibrações", professor: "Gabriel Nascimento", semestre: "8º Semestre", turma: "496820222A", sala: "A definir", modalidade: "Híbrido" },

    { dia: "Quinta", curso: "Eng. Civil", disciplina: "Estruturas de Concreto Armado I", professor: "Valerry Garcia", semestre: "4º, 5º e 6º Sem.", turma: "494620231A, 494620241A, 494620242A", sala: "Sala 19", modalidade: "Híbrido" },
    { dia: "Quinta", curso: "Eng. Mecânica", disciplina: "Elementos de Máquinas", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "496820241A, 496820252A", sala: "Sala 21", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Eng. Civil", disciplina: "Cálculo Diferencial e Integral I", professor: "Jhosefy", semestre: "1º Semestre", turma: "494620261A", sala: "Sala 22", modalidade: "Presencial" },

    { dia: "Sexta", curso: "Eng. Civil", disciplina: "Física Geral e Exp. - Energia", professor: "Antenor Neto", semestre: "2º e 3º Semestre", turma: "494620251A, 494620252A", sala: "Sala 11", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Eng. Civil", disciplina: "Mecânica dos Solos e Obras", professor: "Valerry Garcia", semestre: "9º Semestre", turma: "494620221A", sala: "Sala 12", modalidade: "Híbrido" },
    { dia: "Sexta", curso: "Eng. Mecânica", disciplina: "Manufatura Mecânica – Usinagem", professor: "Gabriel Nascimento", semestre: "5º e 8º Semestre", turma: "496820222A, 496820241A", sala: "Sala 16", modalidade: "Híbrido" },
    { dia: "Sexta", curso: "Eng. Civil", disciplina: "Estruturas Hiperestáticas", professor: "Elenildo Barros", semestre: "4º, 5º e 7º Sem.", turma: "494620231A, 494620241A, 494620242A", sala: "Sala 19", modalidade: "Híbrido" },


    // =====================================================
    // CURSO: PSICOLOGIA
    // =====================================================

    { dia: "Segunda", curso: "Psicologia", disciplina: "Psicologia Social Avançada", professor: "Clauber Torres", semestre: "8º e 9º Semestre", turma: "4433820221A, 4433820221B", sala: "Sala 07", modalidade: "Híbrido" },
    { dia: "Segunda", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psic. III", professor: "Sandro Ueki", semestre: "6º Semestre", turma: "4433820232A", sala: "Sala 10", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Psicologia", disciplina: "Bases Biológicas do Comport.", professor: "Stéphane Negrão", semestre: "4º Semestre", turma: "4433820242A", sala: "Sala 11", modalidade: "Presencial" },
    { dia: "Segunda", curso: "Psicologia", disciplina: "Neuronatomofisiologia", professor: "Nayana Coutinho", semestre: "2º e 3º Semestre", turma: "4433820251A, 4433820252A", sala: "Sala 27", modalidade: "Presencial" },

    { dia: "Terça", curso: "Psicologia", disciplina: "Metodologia da Pesquisa", professor: "Stéphane Negrão", semestre: "1º Semestre", turma: "4433820261A", sala: "Sala 04", modalidade: "Presencial" },
    { dia: "Terça", curso: "Psicologia", disciplina: "Psic. Organizacional e do Trabalho", professor: "Viviane Luz", semestre: "6º e 7º Semestre", turma: "4433820231A, 4433820232A", sala: "Sala 05", modalidade: "Presencial" },
    { dia: "Terça", curso: "Psicologia", disciplina: "Matrizes do Pensamento - Behaviorismo", professor: "Julia Veloso", semestre: "4º Semestre", turma: "4433820242A", sala: "Sala 06", modalidade: "Presencial" },
    { dia: "Terça", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Danianisse Balieiro", semestre: "5º Semestre", turma: "4433820241A", sala: "Sala 09", modalidade: "Presencial" },
    { dia: "Terça", curso: "Psicologia", disciplina: "Métodos Quantitativos", professor: "Nayana Coutinho", semestre: "3º Semestre", turma: "4433820251A", sala: "Sala 10", modalidade: "Presencial" },

    { dia: "Quarta", curso: "Psicologia", disciplina: "Análise Experimental do Comport.", professor: "Clauber Torres", semestre: "1º e 2º Semestre", turma: "4433820252A", sala: "Sala 04", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Psicologia", disciplina: "Desenvolvimento Humano II", professor: "Stéphane Negrão", semestre: "3º Semestre", turma: "4433820251A", sala: "Sala 11", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psic. II", professor: "Sandro Ueki", semestre: "7º Semestre", turma: "4433820231A", sala: "Sala 26", modalidade: "Presencial" },
    { dia: "Quarta", curso: "Psicologia", disciplina: "Matrizes - Existencial Humanista", professor: "Stella Cezimbra", semestre: "4º e 6º Semestre", turma: "4433820232A, 4433820242A", sala: "Sala 29/30", modalidade: "Presencial" },

    { dia: "Quinta", curso: "Psicologia", disciplina: "História da Psicologia", professor: "Clauber Torres", semestre: "1º Semestre", turma: "4433820261A", sala: "Sala 07", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Psicologia", disciplina: "Processos Psicológicos Básicos", professor: "Stella Cezimbra", semestre: "2º Semestre", turma: "4433820252A", sala: "Sala 16", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Psicologia", disciplina: "Terapia Familiar Sistêmica", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A", sala: "Sala 18", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Psicologia", disciplina: "Medidas e Avaliação em Psic. II", professor: "Sandro Ueki", semestre: "5º Semestre", turma: "4433820241A", sala: "Sala 29/30", modalidade: "Presencial" },
    { dia: "Quinta", curso: "Psicologia", disciplina: "Psicologia Hospitalar", professor: "Julia Veloso", semestre: "9º Semestre", turma: "4433820221A, 4433820221B", sala: "Sala 31/32", modalidade: "Híbrido" },

    { dia: "Sexta", curso: "Psicologia", disciplina: "Matrizes - Psicanálise", professor: "Danianisse Balieiro", semestre: "4º e 5º Semestre", turma: "4433820241A, 4433820242A", sala: "Sala 01", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Psicologia", disciplina: "Psicopatologia II", professor: "Gisele Maraschin", semestre: "6º Semestre", turma: "4433820231A", sala: "Sala 02", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Viviane Luz", semestre: "6º Semestre", turma: "4433820232A", sala: "Sala 09", modalidade: "Presencial" },
    { dia: "Sexta", curso: "Psicologia", disciplina: "Psicologia Social Introdutória", professor: "Stéphane Negrão", semestre: "1º Semestre", turma: "4433820261A", sala: "Sala 05", modalidade: "Presencial" },


    // =====================================================
    // CURSOS: EAD (TUTORIAS PRESENCIAIS)
    // =====================================================

    // --- SEGUNDA-FEIRA ---
    { dia: "Segunda", curso: "Ciências Contábeis", disciplina: "Disciplina EAD", professor: "Lucivan Medina", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 12", modalidade: "EAD" },
    { dia: "Segunda", curso: "Biomedicina", disciplina: "Disciplina EAD", professor: "Ramilla Rocha", semestre: "1º Semestre", turma: "1º Semestre", sala: "Sala 16", modalidade: "EAD" },
    { dia: "Segunda", curso: "Enfermagem", disciplina: "Disciplina EAD", professor: "Wenyson", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre", sala: "Sala 17", modalidade: "EAD" },
    { dia: "Segunda", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Marcele Moraes", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 19", modalidade: "EAD" },
    { dia: "Segunda", curso: "Administração", disciplina: "Disciplina EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 22", modalidade: "EAD" },
    { dia: "Segunda", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Wilkson Sá", semestre: "4º Semestre", turma: "4º Semestre", sala: "Sala 23", modalidade: "EAD" },
    { dia: "Segunda", curso: "Nutrição", disciplina: "Disciplina EAD", professor: "Mahyá Martins", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 24", modalidade: "EAD" },
    { dia: "Segunda", curso: "Fisioterapia", disciplina: "Disciplina EAD", professor: "Diosé Lira", semestre: "1º e 8º Semestre", turma: "1º e 8º Semestre", sala: "Sala 25", modalidade: "EAD" },
    { dia: "Segunda", curso: "Farmácia", disciplina: "Disciplina EAD", professor: "Arley Amanda / Erick", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 26", modalidade: "EAD" },

    // --- TERÇA-FEIRA ---
    { dia: "Terça", curso: "Administração", disciplina: "Disciplina EAD", professor: "Denise Pinheiro", semestre: "7º Semestre", turma: "7º Semestre", sala: "Sala 11", modalidade: "EAD" },
    { dia: "Terça", curso: "Farmácia", disciplina: "Disciplina EAD", professor: "Arley Amanda / Erick", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 12", modalidade: "EAD" },
    { dia: "Terça", curso: "Pedagogia", disciplina: "Disciplina EAD", professor: "Alberiny Barros", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 16", modalidade: "EAD" },
    { dia: "Terça", curso: "Eng. Produção", disciplina: "Disciplina EAD", professor: "Francisco Lomanto", semestre: "7º Semestre", turma: "7º Semestre", sala: "Sala 17", modalidade: "EAD" },
    { dia: "Terça", curso: "Eng. Mecânica", disciplina: "Disciplina EAD", professor: "Marcelo Cabral", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre", sala: "Sala 18", modalidade: "EAD" },
    { dia: "Terça", curso: "Nutrição", disciplina: "Disciplina EAD", professor: "Mahyá Martins", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 19", modalidade: "EAD" },
    { dia: "Terça", curso: "Enfermagem", disciplina: "Disciplina EAD", professor: "Wenyson", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 21", modalidade: "EAD" },
    { dia: "Terça", curso: "Biomedicina", disciplina: "Disciplina EAD", professor: "Ramilla Rocha", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 22", modalidade: "EAD" },
    { dia: "Terça", curso: "Engenharia", disciplina: "Disciplina EAD", professor: "Lucimar Pereira", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 23", modalidade: "EAD" },
    { dia: "Terça", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Myrian Galvão", semestre: "10º Semestre", turma: "10º Semestre", sala: "Sala 24", modalidade: "EAD" },
    { dia: "Terça", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Marcele Moraes", semestre: "5º Semestre", turma: "5º Semestre", sala: "Sala 25", modalidade: "EAD" },
    { dia: "Terça", curso: "Ciências Contábeis", disciplina: "Disciplina EAD", professor: "Lucivan Medina", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 26", modalidade: "EAD" },
    { dia: "Terça", curso: "Fisioterapia", disciplina: "Disciplina EAD", professor: "Daise Alves / Diosé Lira", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala a definir", modalidade: "EAD" },

    // --- QUARTA-FEIRA ---
    { dia: "Quarta", curso: "Engenharia", disciplina: "Disciplina EAD", professor: "Lucimar Pereira", semestre: "1º Semestre", turma: "1º Semestre", sala: "Sala 05", modalidade: "EAD" },
    { dia: "Quarta", curso: "Fisioterapia", disciplina: "Disciplina EAD", professor: "Diosé Lira", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 07", modalidade: "EAD" },
    { dia: "Quarta", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Myrian Galvão", semestre: "1º Semestre", turma: "1º Semestre", sala: "Sala 10", modalidade: "EAD" },
    { dia: "Quarta", curso: "Farmácia", disciplina: "Disciplina EAD", professor: "Arley Amanda / Erick", semestre: "1º e 10º Semestre", turma: "1º e 10º Semestre", sala: "Sala 12", modalidade: "EAD" },
    { dia: "Quarta", curso: "Pedagogia", disciplina: "Disciplina EAD", professor: "Alberiny Barros", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 17", modalidade: "EAD" },
    { dia: "Quarta", curso: "Eng. Mecânica", disciplina: "Disciplina EAD", professor: "Marcelo Cabral", semestre: "10º Semestre", turma: "10º Semestre", sala: "Sala 18", modalidade: "EAD" },
    { dia: "Quarta", curso: "Nutrição", disciplina: "Disciplina EAD", professor: "Mahyá Martins", semestre: "1º Semestre", turma: "1º Semestre", sala: "Sala 19", modalidade: "EAD" },
    { dia: "Quarta", curso: "Administração", disciplina: "Disciplina EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 22", modalidade: "EAD" },
    { dia: "Quarta", curso: "Biomedicina", disciplina: "Disciplina EAD", professor: "Ana Paula", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 24", modalidade: "EAD" },
    { dia: "Quarta", curso: "Eng. Produção", disciplina: "Disciplina EAD", professor: "Francisco Lomanto", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", sala: "Sala 25", modalidade: "EAD" },
    { dia: "Quarta", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Wilkson Sá", semestre: "3º Semestre", turma: "3º Semestre", sala: "Sala 27", modalidade: "EAD" },
    { dia: "Quarta", curso: "Fisioterapia", disciplina: "Disciplina EAD", professor: "Daise Alves", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala a definir", modalidade: "EAD" },
    { dia: "Quarta", curso: "Ciências Contábeis", disciplina: "Disciplina EAD", professor: "Lucivan Medina", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala a definir", modalidade: "EAD" },
    { dia: "Quarta", curso: "Enfermagem", disciplina: "Disciplina EAD", professor: "Wenyson", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala a definir", modalidade: "EAD" },
    { dia: "Quarta", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Marcele Moraes", semestre: "5º Semestre", turma: "5º Semestre", sala: "Sala a definir", modalidade: "EAD" },

    // --- QUINTA-FEIRA ---
    { dia: "Quinta", curso: "Enfermagem", disciplina: "Disciplina EAD", professor: "Wenyson", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 10", modalidade: "EAD" },
    { dia: "Quinta", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Myrian Galvão", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre", sala: "Sala 11", modalidade: "EAD" },
    { dia: "Quinta", curso: "Farmácia", disciplina: "Disciplina EAD", professor: "Arley Amanda / Erick", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre", sala: "Sala 12", modalidade: "EAD" },
    { dia: "Quinta", curso: "Administração", disciplina: "Disciplina EAD", professor: "Denise Pinheiro", semestre: "1º e 8º Semestre", turma: "1º e 8º Semestre", sala: "Sala 17", modalidade: "EAD" },
    { dia: "Quinta", curso: "Nutrição", disciplina: "Disciplina EAD", professor: "Mahyá Martins", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 23", modalidade: "EAD" },
    { dia: "Quinta", curso: "Eng. Mecânica", disciplina: "Disciplina EAD", professor: "Marcelo Cabral", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 24", modalidade: "EAD" },
    { dia: "Quinta", curso: "Biomedicina", disciplina: "Disciplina EAD", professor: "Ana Paula", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", sala: "Sala 25", modalidade: "EAD" },
    { dia: "Quinta", curso: "Agronomia", disciplina: "Disciplina EAD", professor: "Marcele Moraes", semestre: "2º Semestre", turma: "2º Semestre", sala: "Sala 26", modalidade: "EAD" },
    { dia: "Quinta", curso: "Biomedicina", disciplina: "Disciplina EAD", professor: "Ramilla / Ana Paula", semestre: "8º Semestre", turma: "8º Semestre", sala: "Sala 27", modalidade: "EAD" },
    { dia: "Quinta", curso: "Fisioterapia", disciplina: "Disciplina EAD", professor: "Diosé Lira", semestre: "9º Semestre", turma: "9º Semestre", sala: "Sala a definir", modalidade: "EAD" },

    // --- SEXTA-FEIRA ---
    { dia: "Sexta", curso: "Licenciaturas", disciplina: "Pedagogia, História, Ed. Física, Matemática", professor: "Carla Girard", semestre: "1º Semestre", turma: "1º Semestre", sala: "Sala 10", modalidade: "EAD" },
    { dia: "Sexta", curso: "Farmácia", disciplina: "Disciplina EAD", professor: "Arley Amanda / Erick", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", sala: "Sala 17", modalidade: "EAD" },
    { dia: "Sexta", curso: "Eng. Elétrica", disciplina: "Disciplina EAD", professor: "Elika Sousa", semestre: "7º Semestre", turma: "7º Semestre", sala: "Sala 18", modalidade: "EAD" }
];

// =====================================================
// LÓGICA DO SISTEMA (NÃO ALTERAR ABAIXO)
// =====================================================

let diaSelecionado = "Todos";

function carregarTabela(lista) {
    const tbody = document.getElementById("tabela-horarios");
    const contador = document.getElementById("total-registros");

    // ORDENAÇÃO AUTOMÁTICA (Dia da Semana -> Sala)
    // 1. Mapeia os dias para números para poder ordenar
    const mapDias = { "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5, "Sábado": 6 };

    // 2. Executa a ordenação na lista recebida antes de desenhar
    lista.sort((a, b) => {
        const diaA = mapDias[a.dia] || 99;
        const diaB = mapDias[b.dia] || 99;

        // Se os dias forem diferentes, ordena pelo dia
        if (diaA !== diaB) {
            return diaA - diaB;
        }

        // Se for o mesmo dia, ordena pela Sala (alfabético/numérico)
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